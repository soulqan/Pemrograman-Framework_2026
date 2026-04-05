import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./Middleware/withAuth";

const protectedPaths: string[] = ["/profile", "/produk", "/about", "/admin", "/editor"];

export default function middleware(request: NextRequest) {
  const simpleMiddleware = (_req: NextRequest) => NextResponse.next();
  return withAuth(simpleMiddleware, protectedPaths)(request, {} as any);
}

export const config = {
    matcher: ["/produk", "/about", "/profile", "/admin", "/editor"],
}