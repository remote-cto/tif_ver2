import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/database";

// GET: /api/assessment?assessment_type_id=1
export async function GET(req: NextRequest) {
  const url = new URL(req.url || "");
  const assessmentTypeId = url.searchParams.get("assessment_type_id") || "1";

  try {
    const query = `
        -- Foundation section
    (
  SELECT 
    qb.id,
    qb.question,
    qb.option_a,
    qb.option_b,
    qb.option_c,
    qb.option_d,
    qb.correct_answer,
    t.name AS topic,
    s.name AS section,
    l.name AS level,
    t.weightage AS topic_weightage,
    l.weightage AS level_weightage
  FROM question_bank qb
  JOIN topic t ON qb.topic_id = t.id
  JOIN section s ON t.section_id = s.id
  JOIN level l ON qb.level_id = l.id
  WHERE qb.is_active = TRUE
    AND t.is_active = TRUE
    AND s.is_active = TRUE
    AND l.is_active = TRUE
    AND qb.assessment_type_id = $1
    AND s.id = '1'
  ORDER BY RANDOM()
  LIMIT 18
)
UNION ALL
(
  SELECT 
    qb.id,
    qb.question,
    qb.option_a,
    qb.option_b,
    qb.option_c,
    qb.option_d,
    qb.correct_answer,
    t.name AS topic,
    s.name AS section,
    l.name AS level,
    t.weightage AS topic_weightage,
    l.weightage AS level_weightage
  FROM question_bank qb
  JOIN topic t ON qb.topic_id = t.id
  JOIN section s ON t.section_id = s.id
  JOIN level l ON qb.level_id = l.id
  WHERE qb.is_active = TRUE
    AND t.is_active = TRUE
    AND s.is_active = TRUE
    AND l.is_active = TRUE
    AND qb.assessment_type_id = $1
    AND s.id = '2'
  ORDER BY RANDOM()
  LIMIT 18
)
      `;

    const result = await pool.query(query, [assessmentTypeId]);

    // Format the output as before
    const formattedQuestions = result.rows.map((q: any) => {
      const correctAnswerIndex = { A: 0, B: 1, C: 2, D: 3 }[
        q.correct_answer as "A" | "B" | "C" | "D"
      ];
      return {
        id: q.id.toString(),
        topic: q.topic,
        section: q.section,
        level: q.level,
        question: q.question,
        options: [q.option_a, q.option_b, q.option_c, q.option_d],
        correctAnswer: correctAnswerIndex,
        topicWeightage: q.topic_weightage,
        levelWeightage: q.level_weightage,
      };
    });

    return NextResponse.json(
      { questions: formattedQuestions },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json(
      { error: "Failed to load questions" },
      { status: 500 }
    );
  }
}
