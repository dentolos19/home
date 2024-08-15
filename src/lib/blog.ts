import { formatDate } from "@/lib/utils";
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

export type Post = {
  id: string;
  title: string;
  excerpt: string | undefined;
  category: string;
  draft: boolean;
  url: string | undefined;
  date: string;
  content: string | undefined;
};

export function getPosts() {
  const postsDir = path.join(process.cwd(), "src", "content", "blog");
  const fileNames = fs.readdirSync(postsDir);
  return fileNames
    .map((fileName) => {
      const name = fileName.replace(/\.md$/, "");
      const nameParts = name.split("_");
      const postDate = nameParts[0];
      const postSlug = nameParts.slice(1).join("_");
      const fileContent = fs.readFileSync(path.join(postsDir, fileName), "utf-8");
      const fileMatter = matter(fileContent);
      return {
        id: postSlug,
        title: fileMatter.data.title,
        excerpt: fileMatter.data.excerpt,
        category: fileMatter.data.category,
        draft: fileMatter.data.draft,
        url: fileMatter.data.url,
        date: formatDate(postDate),
        content: fileMatter.content,
      } as Post;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(id: string) {
  const post = getPosts().find((post) => post.id === id);
  if (!post) {
    return undefined;
  }
  return post;
}