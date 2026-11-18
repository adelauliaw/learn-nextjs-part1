export type Post = {
  slug: string;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "from-nodejs-to-nextjs",
    title: "From Node.js to Next.js",
    content: "We built the API with Node.js and consumed it using Next.js."
  },
  {
    slug: "understanding-dynamic-routes",
    title: "Understanding Dynamic Routes",
    content: "One slug file can render multiple post pages."
  },
  {
    slug: "my-first-full-stack-post",
    title: "My First Full Stack Post",
    content: "Node.js is my backend and Next.js is my frontend."
  }
];