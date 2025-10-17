import { Blog } from "@/lib/schema";
import { Metadata } from "next";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/structured-data";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  const blog = await Blog.findById(id);

  return {
    title: blog?.title ? `${blog.title} - Earthycrafts Blog` : "Blog Post - Earthycrafts",
    description: blog?.content?.[0]?.substring(0, 160) || "Read our latest blog post at Earthycrafts.",
    alternates: {
      canonical: `https://earthycrafts.com/blog/${id}`,
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
      title: blog?.title || "Blog Post",
      description: blog?.content?.[0]?.substring(0, 160) || "Read our latest blog post.",
      url: `https://earthycrafts.com/blog/${id}`,
      siteName: "Earthycrafts",
      type: "article",
    },
  };
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const blog = await Blog.findById(id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Generate structured data
  const articleSchema = generateArticleSchema(blog, id);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://earthycrafts.com" },
    { name: "Blog", url: "https://earthycrafts.com/blog" },
    { name: blog.title, url: `https://earthycrafts.com/blog/${id}` },
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
        <h1 className="text-3xl font-bold">{blog?.title}</h1>
        <div className="text-muted-foreground flex gap-8 text-sm">
          <p>
            <b>Created at:</b> {blog?.createdAt ? blog.createdAt.toLocaleDateString() : "Unknown date"}
          </p>
          <p>
            <b>Last Updated:</b> {blog?.updatedAt ? blog.updatedAt.toLocaleDateString() : "Unknown date"}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {blog?.content.map((paragraph, index) => (
            <p key={index} className="text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
    </>
  );
}
