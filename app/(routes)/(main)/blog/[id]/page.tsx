import { Blog } from "@/lib/schema";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const blog = await Blog.findById(id);

  return (
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
  );
}
