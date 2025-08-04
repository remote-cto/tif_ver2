// app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/database";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, registration_number, password, college_id } = body;

    if (!email || !registration_number || !password || !college_id) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Join user_type for 'Student'
    const query = `
      SELECT au.id, au.name, au.email, au.registration_number, org.name as college_name
      FROM academic_user au
      INNER JOIN user_type ut ON au.user_type_id = ut.id
      INNER JOIN org ON au.org_id = org.id
      WHERE au.email = $1
        AND au.registration_number = $2
        AND au.password = $3
        AND au.org_id = $4
        AND ut.user_type_desc = 'Student'
        AND au.is_active = TRUE
        AND ut.is_active = TRUE
        AND org.is_active = TRUE
      LIMIT 1
    `;
    const result = await pool.query(query, [
      email,
      registration_number,
      password,
      Number(college_id),
    ]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({
      success: true,
      student: result.rows[0],
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
