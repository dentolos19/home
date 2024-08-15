export type GhRepo = {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
  archived: boolean;
  topics: string[];
};

export function getRepos(username: string) {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json())
    .then((repos) => repos as GhRepo[]);
}