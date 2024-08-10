import assets from "@/content/data/assets.json";
import events from "@/content/data/events.json";
import { formatDate } from "@/utils";
import { Redis } from "@upstash/redis";
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL as string,
  token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
});

export async function getRedirects() {
  try {
    const keys = await redis.keys("redirects:*");
    const redirects = await redis.mget(keys);
    return keys.map(
      (key, index) =>
        ({
          id: key.split(":")[1],
          url: redirects[index],
        } as {
          id: string;
          url: string;
        })
    );
  } catch (error) {
    return [];
  }
}

export async function getRedirect(id: string) {
  try {
    const redirect = await redis.get<string>(`redirects:${id}`);
    if (!redirect) {
      return undefined;
    }
    return redirect;
  } catch (error) {
    return undefined;
  }
}

export async function setRedirect(id: string, url: string) {
  try {
    await redis.set(`redirects:${id}`, url);
    return true;
  } catch (error) {
    return false;
  }
}

export async function deleteRedirect(id: string) {
  try {
    const num = await redis.del(`redirects:${id}`);
    return true;
  } catch (error) {
    return false;
  }
}

export function getAssets() {
  return assets;
}

export function getAsset(id: string) {
  return getAssets().find((asset) => asset.id === id);
}

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
        date: formatDate(postDate),
        content: fileMatter.content,
      };
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPost(id: string) {
  const post = getPosts().find((post) => post.id === id);
  if (!post) {
    return undefined;
  }
  return post;
}

export function getEvents() {
  return events;
}

export function getTextFile(name: string) {
  const filePath = path.join(process.cwd(), "src", "content", name);
  return fs.readFileSync(filePath, "utf-8");
}

export function getRepos() {
  return fetch("https://api.github.com/users/dentolos19/repos")
    .then((res) => res.json())
    .then(
      (repos) =>
        repos as {
          name: string;
          full_name: string;
          html_url: string;
          description: string;
          stargazers_count: number;
          language: string;
          forks_count: number;
          archived: boolean;
          topics: string[];
        }[]
    );
}