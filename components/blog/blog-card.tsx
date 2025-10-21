import { IBlog } from "@/lib/schema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { format } from "date-fns";

export default function BlogCard({ blog }: { blog: IBlog }) {
  const excerpt = blog.content?.[0]?.substring(0, 150) || "No description available";
  const truncatedExcerpt = excerpt.length > 150 ? excerpt.substring(0, 150) + "..." : excerpt;

  return (
    <Link href={`/blog/${blog.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <CardHeader>
          <CardTitle className="line-clamp-2 text-xl">{blog.title}</CardTitle>
          <CardDescription className="text-xs">
            {blog.createdAt ? format(new Date(blog.createdAt), "MMM dd, yyyy") : "Unknown date"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">{truncatedExcerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

