// /api/save-score/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/database";

// Payload interface - simplified, backend will calculate everything
interface SaveScoreRequest {
  academic_user_id: number;
  tenant_id: number;
  assessment_type_id: number;
  answers: { [key: string]: number }; // question_bankid => selected option index
  questions: Array<{
    id: string;
    correctAnswer: number;
    topic: string; // topic name
    level: string; // level name
    section: string; // section name
  }>;
  time_started: number;
  time_completed: number;
}

type TopicKey =
  | "ML Concepts"
  | "Python" 
  | "Cloud & Deployment"
  | "Tools & Git"
  | "AI Use Cases"
  | "Projects"
  | "Math"
  | "Modern AI Stack Awareness";

type DifficultyKey = "Basic" | "Intermediate" | "Advanced";

const topicWeights: Record<TopicKey, number> = {
  "ML Concepts": 1.2,
  Python: 1.0,
  "Cloud & Deployment": 1.5,
  "Tools & Git": 1.1,
  "AI Use Cases": 1.1,
  Projects: 0.9,
  Math: 0.8,
  "Modern AI Stack Awareness": 1.5,
};

const difficultyWeights: Record<DifficultyKey, number> = {
  Basic: 1.0,
  Intermediate: 1.5,
  Advanced: 2.0,
};

// Helper function: Calculate all scores
function calculateAllScores(
  questions: Array<{
    id: string;
    correctAnswer: number;
    topic: string;
    level: string;
    section: string;
  }>,
  answers: { [key: string]: number }
) {
  // Group questions by topic
  const topicGroups = questions.reduce((acc, q) => {
    if (!acc[q.topic]) acc[q.topic] = [];
    acc[q.topic].push(q);
    return acc;
  }, {} as Record<string, typeof questions>);

  // Calculate topic scores
  const topicScores = Object.keys(topicGroups).map(topic => {
    const topicQuestions = topicGroups[topic];
    const correctAnswers = topicQuestions.filter(q => answers[q.id] === q.correctAnswer);
    
    // Count correct answers by level
    const levels = { Basic: 0, Intermediate: 0, Advanced: 0 };
    correctAnswers.forEach(q => {
      levels[q.level as DifficultyKey]++;
    });

    const totalCorrect = correctAnswers.length;
    let weightedScore = 0;
    
    if (totalCorrect > 0) {
      const levelAvg = (
        levels.Basic * difficultyWeights.Basic +
        levels.Intermediate * difficultyWeights.Intermediate +
        levels.Advanced * difficultyWeights.Advanced
      ) / totalCorrect;
      
      const topicWeight = topicWeights[topic as TopicKey] || 1.0;
      weightedScore = totalCorrect * levelAvg * topicWeight;
    }

    const normalizedScore = Math.min(100, (weightedScore / 10) * 100);
    
    return {
      topic,
      correct: correctAnswers.length,
      total: topicQuestions.length,
      weighted_score: weightedScore,
      normalized_score: normalizedScore,
      classification: normalizedScore >= 80 ? "Strength" : 
                     normalizedScore < 60 ? "Gap" : "Optional",
      levels
    };
  });

  // Calculate section scores
  const sectionStats = {
    Foundational: { correct: 0, total: 0 },
    Industrial: { correct: 0, total: 0 }
  };

  questions.forEach(q => {
    const section = q.section;
    if (section === "Foundational" || section === "Industrial") {
      sectionStats[section].total++;
      if (answers[q.id] === q.correctAnswer) {
        sectionStats[section].correct++;
      }
    }
  });

  const foundationalScore = sectionStats.Foundational.total > 0
    ? (sectionStats.Foundational.correct / sectionStats.Foundational.total) * 100
    : null;
    
  const industrialScore = sectionStats.Industrial.total > 0
    ? (sectionStats.Industrial.correct / sectionStats.Industrial.total) * 100
    : null;

  // Calculate total and readiness scores
  const totalScore = topicScores.reduce((sum, t) => sum + t.weighted_score, 0);
  const maxPossible = questions.length * 2.0 * 1.5; // Max possible weighted score
  const readinessScore = Math.min(100, (totalScore / maxPossible) * 100);

  return {
    topicScores,
    sectionScores: {
      foundational: foundationalScore,
      industrial: industrialScore
    },
    totalScore,
    readinessScore
  };
}

// Helper function: Calculate section-wise scores from database
async function calculateSectionScoresFromDB(
  client: any,
  questions: Array<{
    id: string;
    correctAnswer: number;
    topic: string;
    level: string;
    section: string;
  }>,
  answers: { [key: string]: number },
  topicNameToId: Record<string, number>
) {
  try {
    // Get section information for the topics
    const topicIds = Object.values(topicNameToId);
    const res = await client.query(
      `SELECT t.id as topic_id, t.name as topic_name, s.name as section_name
       FROM topic t
       JOIN section s ON t.section_id = s.id
       WHERE t.id = ANY($1) AND t.is_active = TRUE AND s.is_active = TRUE`,
      [topicIds]
    );
    
    const topicToSection: Record<string, string> = {};
    for (const row of res.rows) {
      topicToSection[row.topic_name] = row.section_name;
    }

    // Calculate correct answers by section
    const sectionStats = {
      Foundation: { correct: 0, total: 0 },
      Industry: { correct: 0, total: 0 }
    };

    questions.forEach(q => {
      const section = topicToSection[q.topic];
      if (section === "Foundation" || section === "Industry") {
        sectionStats[section].total++;
        if (answers[q.id] === q.correctAnswer) {
          sectionStats[section].correct++;
        }
      }
    });

    return {
      foundational: sectionStats.Foundation.total > 0
        ? (sectionStats.Foundation.correct / sectionStats.Foundation.total) * 100
        : null,
      industrial: sectionStats.Industry.total > 0
        ? (sectionStats.Industry.correct / sectionStats.Industry.total) * 100
        : null
    };
  } catch (error) {
    console.error("Error calculating section scores:", error);
    return { foundational: null, industrial: null };
  }
}

export async function POST(req: NextRequest) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Parse and validate the request
    const {
      academic_user_id,
      tenant_id,
      assessment_type_id,
      answers,
      questions,
      time_started,
      time_completed,
    }: SaveScoreRequest = await req.json();

    if (
      !academic_user_id ||
      !tenant_id ||
      !assessment_type_id ||
      !answers ||
      !questions ||
      !time_started ||
      !time_completed
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Calculate all scores using backend logic
    const calculatedScores = calculateAllScores(questions, answers);

    // Lookup topic and level ID mappings
    const topicNames = [...new Set(questions.map(q => q.topic))];
    const resTopics = await client.query(
      `SELECT id, name FROM topic WHERE name = ANY($1) AND is_active = TRUE`,
      [topicNames]
    );
    const topicNameToId: Record<string, number> = {};
    for (const row of resTopics.rows) topicNameToId[row.name] = row.id;

    const levelNames = [...new Set(questions.map(q => q.level))];
    const resLevels = await client.query(
      `SELECT id, name FROM level WHERE name = ANY($1) AND is_active = TRUE`,
      [levelNames]
    );
    const levelNameToId: Record<string, number> = {};
    for (const row of resLevels.rows) levelNameToId[row.name] = row.id;

    // Get database section scores (fallback to calculated ones if DB lookup fails)
    const dbSectionScores = await calculateSectionScoresFromDB(
      client,
      questions,
      answers,
      topicNameToId
    );
    
    // Use DB section scores if available, otherwise use calculated ones
    const finalSectionScores = {
      foundational: dbSectionScores.foundational !== null 
        ? dbSectionScores.foundational 
        : calculatedScores.sectionScores.foundational,
      industrial: dbSectionScores.industrial !== null 
        ? dbSectionScores.industrial 
        : calculatedScores.sectionScores.industrial
    };

    // Insert the assessment final record
    const resFinal = await client.query(
      `INSERT INTO academic_assessment_final (
        tenant_id, assessment_type_id, academic_user_id,
        readiness_score, foundational_assessment, industrial_assessment,
        create_date, is_active
      ) VALUES ($1, $2, $3, $4, $5, $6, NOW(), TRUE)
      RETURNING id;`,
      [
        tenant_id,
        assessment_type_id,
        academic_user_id,
        calculatedScores.readinessScore,
        finalSectionScores.foundational,
        finalSectionScores.industrial
      ]
    );
    const assessmentFinalId = resFinal.rows[0].id;

    // Insert each question attempt log
    const logPromises = questions.map(q => {
      const selectedOptionIdx = answers[q.id];
      const topicId = topicNameToId[q.topic];
      if (typeof selectedOptionIdx !== "number" || !topicId) return null;
      
      return client.query(
        `INSERT INTO academic_log (
          academic_user_id, assessment_type_id, topic_id, question_bankid,
          selected_answer, time_taken_seconds, confidence_level, reasoning, feedback,
          create_date, is_active
        ) VALUES ($1, $2, $3, $4, $5, NULL, NULL, NULL, NULL, NOW(), TRUE)`,
        [
          academic_user_id,
          assessment_type_id,
          topicId,
          parseInt(q.id, 10),
          String.fromCharCode(65 + selectedOptionIdx) // Convert index (0-3) to A-D
        ]
      );
    }).filter(Boolean);
    await Promise.all(logPromises);

    // Insert per-topic scores into academic_assessment_action
    const topicPromises = calculatedScores.topicScores.map(topicData => {
      const topic_id = topicNameToId[topicData.topic];
      if (!topic_id) {
        console.warn(`Topic ID not found for topic: ${topicData.topic}`);
        return null;
      }
      
      return client.query(
        `INSERT INTO academic_assessment_action (
          tenant_id, assessment_type_id, academic_user_id, topic_id,
          total_questions, correct_answers, topic_wt_got, level_wt_got,
          create_date, is_active
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, NULL, NOW(), TRUE)`,
        [
          tenant_id,
          assessment_type_id,
          academic_user_id,
          topic_id,
          topicData.total,
          topicData.correct,
          Math.round(topicData.weighted_score)
        ]
      );
    }).filter(Boolean);
    await Promise.all(topicPromises);

    // Commit and respond with all calculated data
    await client.query("COMMIT");
    
    return NextResponse.json({
      success: true,
      assessment_id: assessmentFinalId,
      total_score: calculatedScores.totalScore,
      readiness_score: calculatedScores.readinessScore,
      section_scores: finalSectionScores,
      topic_scores: calculatedScores.topicScores
    });
    
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Error saving assessment:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  } finally {
    client.release();
  }
}