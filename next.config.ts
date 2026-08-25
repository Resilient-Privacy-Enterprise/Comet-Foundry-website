import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Static CSP — Next.js prerenders most pages, so a per-request nonce
// via middleware would mismatch the build-time nonce baked into HTML
// (blocking every inline hydration script). Static policy keeps
// 'unsafe-inline' and adds Vercel Analytics / Speed Insights hosts.
const cspValue = isDev
  ? "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' ws: https://vitals.vercel-insights.com; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
  : "default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://vitals.vercel-insights.com; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests";

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspValue },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), browsing-topics=(), interest-cohort=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  // Static build ID prevents deployment fingerprinting via changing build IDs.
  generateBuildId: async () => 'cf-build',
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/about', destination: '/mission/why', permanent: true },
      { source: '/projects', destination: '/builds', permanent: true },
      { source: '/resources', destination: '/stash', permanent: true },
      { source: '/team', destination: '/chapters/utd/leadership', permanent: true },
      { source: '/founder', destination: '/leadership/founder', permanent: true },
      { source: '/partners', destination: '/backers', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:path*', destination: '/', permanent: true },
      { source: '/field-notes', destination: '/', permanent: true },
      { source: '/field-notes/:path*', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/assets/:path*",
        // 1-day cache with revalidation so asset edits propagate within a
        // day. If the file is truly fingerprinted (never changes at a URL)
        // we can bump this back to immutable per-path.
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, must-revalidate" }],
      },
      {
        // Prevent preview/branch deployments from being indexed.
        source: "/(.*)",
        has: [{ type: "host", value: "(?<host>.*\\.vercel\\.app)" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
