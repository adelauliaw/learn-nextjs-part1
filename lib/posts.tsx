import fs from "fs";
import path from "path";
import matter from "gray-matter";

const folder = path.join(process.cwd(), "content");

export function getAllPosts() {
  const files = fs.readdirSync(folder);

  return files.map((file) => {
    const slug = file.replace(".md", "");

    const content = fs.readFileSync(
      path.join(folder, file),
      "utf8"
    );

    const { data } = matter(content);

    return {
      slug,
      title: data.title,
      date: data.date
    };
  });
}

export function getPostBySlug(slug: string) {
  const content = fs.readFileSync(
    path.join(folder, `${slug}.md`),
    "utf8"
  );

  const { data, content: body } = matter(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    body
  };
}