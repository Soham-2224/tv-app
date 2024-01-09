import { NextResponse, NextRequest } from "next/server"

import { jwtVerify, createRemoteJWKSet } from "jose"

const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL

export async function middleware(req: NextRequest) {
    const hanko = req.cookies.get("hanko")?.value

    const JWKS = createRemoteJWKSet(new URL(`${hankoApiUrl}/.well-known/jwks.json`))

    try {
        const verifiedJWT = await jwtVerify(hanko ?? "", JWKS)
        return NextResponse.redirect(new URL("/movies", req.url))
    } catch {
        return NextResponse.redirect(new URL("/login", req.url))
    }
}

export const config = {
    matcher: [
        /* Match paths starting with "/" and not containing excluded patterns: */
        '/((?!api|_next/static|_next/image|favicon.ico|movies|tv).*)',
    ]
}
