import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-url", request.url);
  return NextResponse.next({
    request: {
      headers: headers,
    },
  });
}