// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const adminProtectedRoutes = ["/dean-dashboard"]; // add more as needed

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (adminProtectedRoutes.includes(pathname)) {
    const cookie = request.cookies.get("adminSession");
    if (!cookie) {
      // No admin session found, redirect to login
      const url = request.nextUrl.clone();
      url.pathname = "/Login";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

// To apply middleware only to protected routes:
export const config = {
  matcher: ["/dean-dashboard"],
};
