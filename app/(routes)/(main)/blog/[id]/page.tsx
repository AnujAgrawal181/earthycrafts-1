import { Blog } from "@/lib/schema";
import { Metadata } from "next";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { connectDB } from "@/lib/db";
import { notFound } from "next/navigation";

// Enable ISR (Incremental Static Regeneration) - revalidate every hour
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    await connectDB();
    const { id } = params;
    const blog = await Blog.findOne({ slug: id.toLowerCase() });

    if (!blog) {
      return {
        title: "Blog Not Found - Earthycrafts",
        description: "The blog post you're looking for doesn't exist.",
        robots: {
          index: false,
          follow: true,
        },
      };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

    return {
      title: `${blog.title} - Earthycrafts Blog`,
      description: blog.content?.[0]?.substring(0, 160) || "Read our latest blog post at Earthycrafts.",
      alternates: {
        canonical: `${baseUrl}/blog/${blog.slug}`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      openGraph: {
        title: blog.title,
        description: blog.content?.[0]?.substring(0, 160) || "Read our latest blog post.",
        url: `${baseUrl}/blog/${blog.slug}`,
        siteName: "Earthycrafts",
        type: "article",
      },
    };
  } catch (error) {
    console.error("Error generating blog metadata:", error);
    return {
      title: "Blog - Earthycrafts",
      description: "Read our latest blog posts at Earthycrafts.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  try {
    await connectDB();
    const { id } = params;
    const blog = await Blog.findOne({ slug: id.toLowerCase() });

    if (!blog) {
      notFound();
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

    // Generate structured data
    const articleSchema = generateArticleSchema(blog, blog.slug);
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: baseUrl },
      { name: "Blog", url: `${baseUrl}/blog` },
      { name: blog.title, url: `${baseUrl}/blog/${blog.slug}` },
    ]);

    return (
      <>
        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <main className="flex flex-col gap-4 lg:px-16 md:px-12 sm:px-8 p-4">
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <div className="text-muted-foreground flex gap-8 text-sm">
            <p>
              <b>Created at:</b> {blog.createdAt ? blog.createdAt.toLocaleDateString() : "Unknown date"}
            </p>
            <p>
              <b>Last Updated:</b> {blog.updatedAt ? blog.updatedAt.toLocaleDateString() : "Unknown date"}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {blog.content.map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error("Error loading blog page:", error);
    notFound();
  }
}
