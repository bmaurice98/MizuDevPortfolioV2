import { NextRequest, NextResponse } from "next/server";

const getValidSubdomain = (host?: string | null): string | null => {
  if (!host && typeof window !== "undefined") {
    // On the client side, get the host from window.location
    host = window.location.host;
  }
  if (host && host.includes(".")) {
    // Split the host to extract the subdomain candidate
    const candidate = host.split(".")[0];

    // Return the candidate if it's valid (not 'localhost')
    if (candidate && candidate.includes("admin")) {
      return candidate;
    }
  }
  return null;
};

export function middleware(request: NextRequest){

    const host = request.headers.get("host");

    const subdomain = getValidSubdomain(host);

     if (subdomain !== null) {
       if (subdomain === "admin") {
         //set cookie to false if not set
         const response = NextResponse.rewrite(
           new URL("/admin/login", request.url),
         );
         response.cookies.set("isAuthenticated", "false", {
           httpOnly: true,
           secure: process.env.NODE_ENV === "production",
           sameSite: "strict", // Protects against CSRF
           maxAge: 60, // 1 week expiration
           path: "/admin/login",
         });
         
         return NextResponse.rewrite(new URL("/admin", request.url));
        }
    //    } else if (subdomain === "admin" && isAuthenticated) {
    //      return NextResponse.rewrite(new URL(`/admin/dashboard`, request.url));
    //    }
     }

    return NextResponse.next()
}

export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    "/((?!api|_next/static|_next/image|.*\\.png$|favicon.ico).*)",
  ],
};