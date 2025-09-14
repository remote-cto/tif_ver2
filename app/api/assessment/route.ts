import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/database";

// Define a common structure for the question select statement to avoid repetition
const QUESTION_SELECT_FIELDS = `
  qb.id, qb.question, qb.option_a, qb.option_b, qb.option_c, qb.option_d, qb.correct_answer,
  t.name AS topic, s.name AS section, l.name AS level,
  t.weightage AS topic_weightage, l.weightage AS level_weightage
`;

const QUESTION_JOINS = `
  FROM question_bank qb
  JOIN topic t ON qb.topic_id = t.id
  JOIN section s ON t.section_id = s.id
  JOIN level l ON qb.level_id = l.id
`;

const BASE_WHERE_CLAUSE = `
  WHERE qb.is_active = TRUE
    AND t.is_active = TRUE
    AND s.is_active = TRUE
    AND l.is_active = TRUE
    AND qb.assessment_type_id = $1
`;

// GET: /api/assessment?type=standard or /api/assessment?type=adaptive
export async function GET(req: NextRequest) {
  const url = new URL(req.url || "");
  const assessmentTypeId = url.searchParams.get("assessment_type_id") || "1";
  const testType = url.searchParams.get("type") || "standard"; // Default to 'standard'

  try {
    let query = '';

    if (testType === 'adaptive') {
      // --- ADAPTIVE (STRUCTURED) QUERY ---
      // This query builds a test with a fixed number of questions from each difficulty level.
      query = `
        -- Foundational Section (Structured)
        (SELECT ${QUESTION_SELECT_FIELDS} ${QUESTION_JOINS} ${BASE_WHERE_CLAUSE} AND s.id = 1 AND l.name = 'Basic' ORDER BY RANDOM() LIMIT 6)
        UNION ALL
        (SELECT ${QUESTION_SELECT_FIELDS} ${QUESTION_JOINS} ${BASE_WHERE_CLAUSE} AND s.id = 1 AND l.name = 'Intermediate' ORDER BY RANDOM() LIMIT 6)
        UNION ALL
        (SELECT ${QUESTION_SELECT_FIELDS} ${QUESTION_JOINS} ${BASE_WHERE_CLAUSE} AND s.id = 1 AND l.name = 'Advanced' ORDER BY RANDOM() LIMIT 6)
        
        UNION ALL

        -- Industrial Section (Structured)
        (SELECT ${QUESTION_SELECT_FIELDS} ${QUESTION_JOINS} ${BASE_WHERE_CLAUSE} AND s.id = 2 AND l.name = 'Basic' ORDER BY RANDOM() LIMIT 6)
        UNION ALL
        (SELECT ${QUESTION_SELECT_FIELDS} ${QUESTION_JOINS} ${BASE_WHERE_CLAUSE} AND s.id = 2 AND l.name = 'Intermediate' ORDER BY RANDOM() LIMIT 6)
        UNION ALL
        (SELECT ${QUESTION_SELECT_FIELDS} ${QUESTION_JOINS} ${BASE_WHERE_CLAUSE} AND s.id = 2 AND l.name = 'Advanced' ORDER BY RANDOM() LIMIT 6)
      `;
    } else {
      // --- STANDARD (RANDOM) QUERY ---
      // This is the original query that fetches a random mix of questions.
      query = `
        -- Foundational Section (Random)
        (
          SELECT ${QUESTION_SELECT_FIELDS}
          ${QUESTION_JOINS}
          ${BASE_WHERE_CLAUSE}
          AND s.id = 1
          ORDER BY RANDOM()
          LIMIT 18
        )
        UNION ALL
        -- Industrial Section (Random)
        (
          SELECT ${QUESTION_SELECT_FIELDS}
          ${QUESTION_JOINS}
          ${BASE_WHERE_CLAUSE}
          AND s.id = 2
          ORDER BY RANDOM()
          LIMIT 18
        )
      `;
    }

    const result = await pool.query(query, [assessmentTypeId]);

    // Shuffle the final combined list of questions for a better user experience
    const shuffledRows = result.rows.sort(() => Math.random() - 0.5);

    const formattedQuestions = shuffledRows.map((q: any) => {
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

