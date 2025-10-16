import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Use environment variable or fallback to production URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/admin",
          "/dashboard/admin/*",
          "/api/*", // Prevent crawling of API routes
        ],
      },
      // Specific rules for common bots
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/dashboard/admin", "/api/*"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/dashboard/admin", "/api/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    // Optional: Add host directive (some search engines use this)
    host: baseUrl,
  };
}
