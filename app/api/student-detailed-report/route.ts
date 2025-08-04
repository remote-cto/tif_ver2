// app/api/student-detailed-report/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/database";

export async function GET(req: NextRequest) {
  const client = await pool.connect();
  
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("student_id");

    if (!studentId) {
      return NextResponse.json(
        { error: "Student ID is required" },
        { status: 400 }
      );
    }

    // 1. Fetch assessment summary from academic_assessment_final (main scores already calculated)
    const assessmentSummaryQuery = `
      SELECT 
        aaf.id,
        aaf.readiness_score,
        aaf.foundational_assessment,
        aaf.industrial_assessment,
        aaf.create_date as attempted_at,
        at.name as assessment_type_name,
        at.id as assessment_type_id
      FROM academic_assessment_final aaf
      INNER JOIN assessment_type at ON aaf.assessment_type_id = at.id
      WHERE aaf.academic_user_id = $1 
        AND aaf.is_active = true
      ORDER BY aaf.create_date DESC
    `;

    // 2. Fetch topic-wise scores from academic_assessment_action (already calculated by save-score API)
    const topicScoresQuery = `
      SELECT 
        aaa.topic_id,
        t.name as topic_name,
        s.name as section_name,
        aaa.correct_answers,
        aaa.total_questions,
        aaa.topic_wt_got as weighted_score,
        aaa.level_wt_got as level_weight,
        at.name as assessment_type_name,
        aaa.assessment_type_id,
        aaa.create_date,
        -- Calculate percentage and classification
        CASE 
          WHEN aaa.total_questions > 0 
          THEN ROUND((aaa.correct_answers::decimal / aaa.total_questions * 100), 2)
          ELSE 0 
        END as score_percent,
        CASE 
          WHEN aaa.total_questions > 0 AND (aaa.correct_answers::decimal / aaa.total_questions * 100) >= 80 
            THEN 'Strength'
          WHEN aaa.total_questions > 0 AND (aaa.correct_answers::decimal / aaa.total_questions * 100) >= 60 
            THEN 'Optional'
          ELSE 'Gap'
        END as classification
      FROM academic_assessment_action aaa
      INNER JOIN topic t ON aaa.topic_id = t.id
      INNER JOIN section s ON t.section_id = s.id
      INNER JOIN assessment_type at ON aaa.assessment_type_id = at.id
      WHERE aaa.academic_user_id = $1 
        AND aaa.is_active = true
      ORDER BY aaa.create_date DESC, s.name, t.name
    `;

    // 3. Fetch question-level details from academic_log
    const questionDetailsQuery = `
      SELECT 
        al.id,
        al.topic_id,
        t.name as topic_name,
        s.name as section_name,
        al.question_bankid,
        qb.question,
        qb.correct_answer,
        al.selected_answer,
        CASE 
          WHEN al.selected_answer = qb.correct_answer THEN true 
          ELSE false 
        END as is_correct,
        al.time_taken_seconds,
        al.confidence_level,
        al.reasoning,
        al.feedback,
        l.name as difficulty_level,
        l.weightage as level_weightage,
        at.name as assessment_type_name,
        al.create_date as attempted_at
      FROM academic_log al
      INNER JOIN question_bank qb ON al.question_bankid = qb.id
      INNER JOIN topic t ON al.topic_id = t.id
      INNER JOIN section s ON t.section_id = s.id
      INNER JOIN level l ON qb.level_id = l.id
      INNER JOIN assessment_type at ON al.assessment_type_id = at.id
      WHERE al.academic_user_id = $1 
        AND al.is_active = true
      ORDER BY al.create_date DESC, t.name
    `;

    // Execute all queries concurrently
    const [assessmentResult, topicScoresResult, questionDetailsResult] = 
      await Promise.all([
        client.query(assessmentSummaryQuery, [studentId]),
        client.query(topicScoresQuery, [studentId]),
        client.query(questionDetailsQuery, [studentId])
      ]);

    // Process assessment summary data
    const assessments = assessmentResult.rows.map(row => ({
      id: row.id,
      assessment_type_id: row.assessment_type_id,
      assessment_type_name: row.assessment_type_name,
      readiness_score: parseFloat(row.readiness_score) || 0,
      foundational_score: parseFloat(row.foundational_assessment) || 0,
      industrial_score: parseFloat(row.industrial_assessment) || 0,
      attempted_at: row.attempted_at,
      status: "completed"
    }));

    // Process topic scores (using pre-calculated data from save-score API)
    const topicScores = topicScoresResult.rows.map(row => ({
      topic_id: row.topic_id,
      topic_name: row.topic_name,
      section_name: row.section_name,
      assessment_type_name: row.assessment_type_name,
      assessment_type_id: row.assessment_type_id,
      correct_answers: row.correct_answers,
      total_questions: row.total_questions,
      score_percent: parseFloat(row.score_percent) || 0,
      weighted_score: row.weighted_score || 0,
      level_weight: row.level_weight || 0,
      classification: row.classification,
      attempted_at: row.create_date
    }));

    // Process question details
    const questionDetails = questionDetailsResult.rows.map(row => ({
      id: row.id,
      topic_id: row.topic_id,
      topic_name: row.topic_name,
      section_name: row.section_name,
      question_id: row.question_bankid,
      question: row.question,
      correct_answer: row.correct_answer,
      selected_answer: row.selected_answer,
      is_correct: row.is_correct,
      time_taken_seconds: row.time_taken_seconds,
      confidence_level: row.confidence_level,
      reasoning: row.reasoning,
      feedback: row.feedback,
      difficulty_level: row.difficulty_level,
      level_weightage: row.level_weightage,
      assessment_type_name: row.assessment_type_name,
      attempted_at: row.attempted_at
    }));

    // Calculate derived summary statistics from the fetched data
    const totalAssessments = assessments.length;
    
    // Calculate overall statistics from topic scores
    const totalQuestions = topicScores.reduce((sum, topic) => sum + topic.total_questions, 0);
    const totalCorrect = topicScores.reduce((sum, topic) => sum + topic.correct_answers, 0);
    const averageScore = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;
    
    // Topic performance summary
    const topicSummary = {
      total_topics: topicScores.length,
      strengths: topicScores.filter(t => t.classification === 'Strength').length,
      optional: topicScores.filter(t => t.classification === 'Optional').length,
      gaps: topicScores.filter(t => t.classification === 'Gap').length
    };

    // Section-wise summary
    const sectionSummary = topicScores.reduce((acc, topic) => {
      const section = topic.section_name;
      if (!acc[section]) {
        acc[section] = {
          total_questions: 0,
          correct_answers: 0,
          topics: []
        };
      }
      acc[section].total_questions += topic.total_questions;
      acc[section].correct_answers += topic.correct_answers;
      acc[section].topics.push(topic.topic_name);
      return acc;
    }, {} as Record<string, any>);

    // Add percentage calculation to section summary
    Object.keys(sectionSummary).forEach(section => {
      const data = sectionSummary[section];
      data.percentage = data.total_questions > 0 
        ? Math.round((data.correct_answers / data.total_questions) * 100 * 100) / 100
        : 0;
    });

    return NextResponse.json({
      success: true,
      student_id: parseInt(studentId),
      summary: {
        total_assessments: totalAssessments,
        total_questions: totalQuestions,
        total_correct: totalCorrect,
        average_score: Math.round(averageScore * 100) / 100,
        topic_summary: topicSummary,
        section_summary: sectionSummary
      },
      assessments: assessments,
      topic_scores: topicScores,
      question_details: questionDetails
    });

  } catch (error) {
    console.error("Error fetching student detailed report:", error);
   return NextResponse.json(
  { error: "Internal server error", details: (error instanceof Error ? error.message : String(error)) },
  { status: 500 }
);

 
  } finally {
    client.release();
  }
}