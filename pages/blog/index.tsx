import Link from "next/link";
import type {
  GetStaticProps,
  InferGetStaticPropsType
} from "next";

import { posts, Post } from "../../data/posts"

export const getStaticProps = (async () => {
  return {
    props: {
      posts
    }
  };
}) satisfies GetStaticProps<{
  posts: Post[];
}>;

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <main>
      <h1>Our Blog</h1>

      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>

          <Link href={`/blog/${post.slug}`}>
            Read More
          </Link>
        </div>
      ))}
    </main>
  );
}