import { Blog } from "@/lib/schema";
import { connectDB } from "@/lib/db";
import { Metadata } from "next";
import BlogCard from "@/components/blog/blog-card";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

export const metadata: Metadata = {
  title: "Blog - Earthycrafts",
  description: "Read our latest blog posts about handmade crafts, interior design, and artisanal products.",
  alternates: {
    canonical: `${baseUrl}/blog`,
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
    title: "Blog - Earthycrafts",
    description: "Read our latest blog posts about handmade crafts, interior design, and artisanal products.",
    url: `${baseUrl}/blog`,
    siteName: "Earthycrafts",
    type: "website",
  },
};

async function getBlogs() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Blog", url: `${baseUrl}/blog` },
  ]);

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="flex flex-col gap-8 lg:px-16 md:px-12 sm:px-8 p-4 py-12">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
          <p className="text-lg text-muted-foreground">
            Discover insights, tips, and stories about handmade crafts and interior design.
          </p>
        </div>

        {/* Blog Grid */}
        {blogs.length === 0 ? (
          <div className="flex items-center justify-center py-12">
            <p className="text-lg text-muted-foreground">No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog._id?.toString()} blog={blog} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

