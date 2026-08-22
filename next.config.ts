import type { NextConfig } from "next";

// Note: Content-Security-Policy is emitted from middleware.ts per-request
// so it can carry a fresh nonce. Everything else is static and set here.

const securityHeaders = [
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
      { source: '/blog', destination: '/field-notes', permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
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
