import { NextResponse } from "next/server";

export const GET = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

  const robots = `
    User-agent: *
    Allow: /
    Disallow: /dashboard/admin
    Disallow: /api/
    
    Sitemap: ${baseUrl}/sitemap.xml
  `;

  return new NextResponse(robots, {
    headers: { "Content-Type": "text/plain" },
  });
};
