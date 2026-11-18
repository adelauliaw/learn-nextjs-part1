import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType
} from "next";

import { posts, Post } from "../../data/posts";

// STEP 1: Tentukan halaman yang akan dibuat
export const getStaticPaths = (async () => {

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug
      }
    })),

    fallback: false
  };

}) satisfies GetStaticPaths;


// STEP 2: Ambil data berdasarkan slug
export const getStaticProps = (async ({ params }) => {

  const slug = String(params?.slug ?? "");

  const post = posts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post
    }
  };

}) satisfies GetStaticProps<{
  post: Post
}>;


// STEP 3: Tampilkan halaman
export default function PostPage({
  post
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <main>
      <h1>{post.title}</h1>

      <p>{post.content}</p>
    </main>
  );
}