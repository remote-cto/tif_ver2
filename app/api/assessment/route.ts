//app/api/assessment/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/database";

export async function GET(req: NextRequest) {
  try {
    // Select 3 random questions PER topic, across ALL sections
    const query = `
      SELECT * FROM (
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
          l.weightage AS level_weightage,
          ROW_NUMBER() OVER (
            PARTITION BY s.id, t.id -- Partition by both section and topic!
            ORDER BY RANDOM()
          ) AS row_num
        FROM question_bank qb
        JOIN topic t ON qb.topic_id = t.id
        JOIN section s ON t.section_id = s.id
        JOIN level l ON qb.level_id = l.id
        WHERE qb.is_active = TRUE
      ) AS sub
      WHERE sub.row_num <= 3
      ORDER BY section, topic, level, id;
    `;

    const result = await pool.query(query);

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
