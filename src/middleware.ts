import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Define public routes accessible without authentication
const PUBLIC_ROUTES = [
  "/",
  "/auth/login",
  "/auth/signup",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/domains/search"
];

// Define role-based routes and their allowed roles
const ROLE_BASED_ROUTES: Record<string, string[]> = {
  "/admin": ["admin"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // Set Security Headers
  // response.headers.set("X-Frame-Options", "DENY");
  // response.headers.set("X-Content-Type-Options", "nosniff");
  //response.headers.set("Referrer-Policy", "origin-when-cross-origin");
  // response.headers.set("X-XSS-Protection", "1; mode=block");

  // const isDev = process.env.NODE_ENV === "development";
  // const csp = isDev
  //   ? "default-src 'self'; connect-src 'self' http://localhost:5000; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
  //   : "default-src 'self'; connect-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self';";

  // response.headers.set("Content-Security-Policy", csp);

  // Allow public routes without authentication
  if (PUBLIC_ROUTES.includes(pathname)) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    // Redirect authenticated users away from auth routes
    if (token && pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return response;
  }

  // Get token using NextAuth secret
  const token: any = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // Redirect to login if unauthenticated
  if (!token) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Role-based access control
  for (const [route, allowedRoles] of Object.entries(ROLE_BASED_ROUTES)) {
    if (pathname.startsWith(route) && !allowedRoles.includes(token.role)) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
