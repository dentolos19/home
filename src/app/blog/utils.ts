import path from "node:path";
import fs from "node:fs";
import { parseFrontmatter, slugify } from "@/utils";

const postsDirectory = path.join(process.cwd(), "src", "app", "blog", "posts");

export type Post = {
  id: string;
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title: string;
  date: string;
};

export function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory).filter((fileName) => fileName.endsWith(".md"));
  const posts = fileNames.map((fileName) => {
    const data = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
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