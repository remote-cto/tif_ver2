// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const adminProtectedRoutes = ["/dean-dashboard"]; 
const studentProtectedRoutes = ["/dashboard"]; 

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check admin protected routes
  if (adminProtectedRoutes.includes(pathname)) {
    const adminCookie = request.cookies.get("adminSession");
    if (!adminCookie) {
      // No admin session found, redirect to login
      const url = request.nextUrl.clone();
      url.pathname = "/Login";
      return NextResponse.redirect(url);
    }
  }

  // Check student protected routes
  if (studentProtectedRoutes.includes(pathname)) {
    const studentCookie = request.cookies.get("studentSession");
    if (!studentCookie) {
      // No student session found, redirect to login
      const url = request.nextUrl.clone();
      url.pathname = "/Login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Apply middleware to both admin and student protected routes
export const config = {
  matcher: ["/dean-dashboard", "/dashboard"],
};