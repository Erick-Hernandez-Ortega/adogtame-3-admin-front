import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token: string | undefined = request.cookies.get("token")?.value;
  const isLoginPage: boolean = request.nextUrl.pathname === "/auth";

  if (!token && !isLoginPage) return NextResponse.redirect(new URL("/auth", request.url));
  
  if (token && isLoginPage) return NextResponse.redirect(new URL("/dashboard", request.url));
  
  return NextResponse.next(); 
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/|images/).*)"],
};
