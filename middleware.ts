import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request ? request.cookies?.get('token') : null;
  const JWT = token?.value;

  const pathname = request.url;
  
  if (pathname.includes('redirect_url')) {
    return NextResponse.next();
  }

  if (JWT) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/collection-profile/:path*',
    '/collections/:path*',
    '/story/:path*',
    '/world-history/:path*',
  ]
}