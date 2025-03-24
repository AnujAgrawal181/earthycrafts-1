import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db"; // Database connection
import { Blog } from "@/lib/schema";

export const GET = async () => {
  try {
    await connectDB(); // ✅ Connect to the database

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

    // ✅ Fetch blogs from the database
    const blogs = await Blog.find({}, "_id updatedAt").lean();

    // ✅ Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>1.0</priority>
        </url>
        ${blogs
          .map(
            ({ _id, updatedAt }) => `
              <url>
                <loc>${baseUrl}/blog/${_id}</loc>
                <lastmod>${new Date(updatedAt as Date).toISOString()}</lastmod>
                <priority>0.8</priority>
              </url>
            `
          )
          .join("")}
      </urlset>`;

    return new NextResponse(sitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
