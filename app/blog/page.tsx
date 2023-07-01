import Link from "next/link";
import { blogMetadata } from "lib/metadata";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import { formatDate } from "utils/formatDate";

export const metadata: Metadata = blogMetadata;
const Blog = async () => {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Welcome to my blog!
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-dark-600 dark:text-dark-300 tracking-tight">
                {post.title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {formatDate(post.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
};

export default Blog;
