import assets from "@/content/data/assets.json";
import events from "@/content/data/events.json";
import { Redis } from "@upstash/redis";
import fs from "node:fs/promises";
import path from "node:path";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL as string,
  token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
});

export async function getRedirects() {
  try {
    const keys = await redis.keys("redirects:*");
    const redirects = await redis.mget(keys);
    return keys.map((key, index) => ({
      id: key.split(":")[1],
      url: redirects[index],
    } as {
      id: string;
      url: string;
    }));
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

export function getAssets() {
  return assets;
}

export function getAsset(id: string) {
  return getAssets().find((asset) => asset.id === id);
}

export function getEvents() {
  return events;
}

export async function getTextFile(name: string) {
  const filePath = path.join(process.cwd(), "src", "content", name);
  return await fs.readFile(filePath, "utf-8");
}