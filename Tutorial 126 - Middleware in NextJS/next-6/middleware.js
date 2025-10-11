// -------------------------
// Way 1

import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // return NextResponse.json({ message: "About page is hacked by a Middleware" })
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: '/about/:path*',
}



// -------------------------
// Way 2

import { NextResponse } from 'next/server'

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.rewrite(new URL('/', request.url))
    }
}