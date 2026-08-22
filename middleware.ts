import { NextRequest, NextResponse } from 'next/server';

// Per-request nonce for the script-src CSP directive.
//
// Modern browsers that support CSP3 will honor 'strict-dynamic' + the nonce and
// ignore 'unsafe-inline' — so an injected <script> can't execute unless it also
// carries the current request's nonce. Older browsers fall back to
// 'unsafe-inline' (the previous baseline), so nothing regresses.
//
// Dev keeps 'unsafe-eval' + ws: for Turbopack / HMR; prod strips both.

const isDev = process.env.NODE_ENV !== 'production';

function buildCsp(nonce: string) {
  const scriptSrc = isDev
    ? `'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-inline' 'unsafe-eval'`
    : `'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-inline'`;
  const connectSrc = isDev ? "'self' ws:" : "'self'";
  return [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    `connect-src ${connectSrc}`,
    "object-src 'none'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    isDev ? '' : 'upgrade-insecure-requests',
  ]
    .filter(Boolean)
    .join('; ');
}

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const csp = buildCsp(nonce);

  // Propagate the nonce to the request so Next.js injects it into its own
  // hydration scripts, and to the response for any client-side reads.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('content-security-policy', csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', csp);
  return response;
}

export const config = {
  matcher: [
    // Skip static assets, image optimizer, and API routes — CSP for those
    // is either irrelevant (assets) or governed by their own handlers.
    {
      source: '/((?!api|_next/static|_next/image|assets|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
