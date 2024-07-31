import { NextResponse } from "next/server"

export function middleware(request: { headers: HeadersInit | undefined; nextUrl: { pathname: string } }) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("/admin", request.nextUrl.pathname)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}
