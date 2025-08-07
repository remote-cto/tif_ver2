// app/api/logout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req: NextRequest) {
  try {
    const { userType } = await req.json();

    let cookieName = "studentSession"; 
    if (userType === "admin") {
      cookieName = "adminSession";
    }

    // Clear the appropriate cookie
    const cookie = serialize(cookieName, "", {
      path: "/",
      maxAge: 0,
    });

    const res = NextResponse.json({ 
      success: true, 
      message: "Logged out successfully" 
    });
    res.headers.set("Set-Cookie", cookie);

    return res;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}