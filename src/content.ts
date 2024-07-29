import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL as string,
  token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
});

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