import { getRepos } from "@/lib/github";
import { updateSearchParams } from "@/lib/utils";
import type { RouteProps } from "@/types";
import clsx from "clsx";
import Link from "next/link";

const filters = [
  {
    label: "All",
    topic: undefined,
  },
  {
    label: ".NET (C#)",
    topic: "dotnet",
  },
  {
    label: "Web (JS/TS)",
    topic: "web",
  },
  {
    label: "Python",
    topic: "python",
  },
  // {
  //   label: "Rust",
  //   topic: "rust",
  // },
  {
    label: "Games",
    topic: "game",
  },
  {
    label: "VSCode Extensions",
    topic: "vscode-extension",
  },
];

export default async function Page(props: RouteProps) {
  const currentFilter = filters.find((filter) => filter.topic === props.searchParams?.topic) ?? filters[0];
  const repos = (await getRepos("dentolos19"))
    .filter((repo) => !repo.topics.includes("personal"))
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .filter((repo) => !currentFilter.topic || repo.topics.includes(currentFilter.topic));
  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[90%] md:w-[70%] lg:w-[50%] space-y-2"}>
        <div className={"flex gap-2 overflow-x-auto"}>
          {filters.map((filter) => (
            <Link
              key={filter.topic}
              className={clsx("btn btn-sm", filter.topic === currentFilter.topic ? "btn-primary" : "btn-outline")}
              href={updateSearchParams("topic", filter.topic).href}
            >
              {filter.label}
            </Link>
          ))}
        </div>
        <div className={"flex flex-col gap-2"}>
          {repos.map((repo) => (
            <Link
              key={repo.full_name}
              className={"card cursor-pointer bg-base-300 hover:bg-base-200"}
              href={repo.html_url}
            >
              <div className={"card-body"}>
                <h2 className={"card-title"}>
                  {repo.name}
                  {repo.stargazers_count > 0 && (
                    <div className={"badge badge-accent gap-1"}>
                      <i className={"fa-solid fa-star"} />
                      {repo.stargazers_count}
                    </div>
                  )}
                  {repo.forks_count > 0 && (
                    <div className={"badge badge-outline gap-1"}>
                      <i className={"fa-solid fa-code-fork"} />
                      {repo.forks_count}
                    </div>
                  )}
                </h2>
                <p>{repo.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}