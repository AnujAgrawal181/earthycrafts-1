import { MetadataRoute } from "next";
import { connectDB } from "@/lib/db";
import { Blog, NewProduct } from "@/lib/schema";
import mongoose from "mongoose";

// Revalidate sitemap every 24 hours
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

  // Static pages with their priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/stones`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/inspiration`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/customization`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  try {
    // Try to fetch dynamic content (blogs, products, etc.)
    await connectDB();

    // Check if we're connected to MongoDB
    if (!mongoose.connection.readyState) {
      console.warn("MongoDB not connected during sitemap generation - returning static pages only");
      return staticPages;
    }

    // Fetch blogs
    const blogs = await Blog.find({}, "slug updatedAt").lean();
    const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.updatedAt as Date),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    // Fetch products
    const products = await NewProduct.find({}, "slug updatedAt").lean();
    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(product.updatedAt as Date),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    // Combine all pages
    return [...staticPages, ...blogPages, ...productPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return at least static pages if database connection fails
    return staticPages;
  }
}

