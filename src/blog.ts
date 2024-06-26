import path from "node:path";
import fs from "node:fs";
import { slugify } from "@/utils";

export type Post = {
  id: string;
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
};

export function parseFrontmatter<T>(data: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(data);
  // biome-ignore lint/style/noNonNullAssertion:
  const frontMatterBlock = match![1];
  const content = data.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<T> = {};

  // biome-ignore lint/complexity/noForEach:
  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim() as keyof T] = value as T[keyof T];
  });

  return { metadata: metadata as T, content };
}

export function getPosts() {
  const postsDir = path.join(process.cwd(), "src", "data", "posts");
  const fileNames = fs.readdirSync(postsDir).filter((fileName) => fileName.endsWith(".md"));
  const posts = fileNames.map((fileName) => {
    const data = fs.readFileSync(path.join(postsDir, fileName), "utf8");
    const id = fileName.replace(/\.md$/, "");
    const { metadata, content } = parseFrontmatter<PostMetadata>(data);
    return {
      id: slugify(id),
      metadata,
      content,
    } as Post;
  });
  return posts.sort((a, b) => b.metadata.date.localeCompare(a.metadata.date));
}

export function getPost(id: string) {
  return getPosts().find((post) => post.id === id);
}