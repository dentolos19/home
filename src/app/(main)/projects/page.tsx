import ProjectItem from "@/app/(main)/projects/_components/project-item";
import FilterSelector from "@/components/filter-selector";
import { getRepos } from "@/lib/integrations/github";
import type { RouteProps } from "@/types";
import { Metadata } from "next";
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
  // {
  //   label: "Games",
  //   topic: "game",
  // },
  {
    label: "Extensions",
    topic: "extension",
  },
];

export const metadata: Metadata = {
  title: "Dennise's Projects",
};

export const revalidate = 86400; // revalidate data every 24 hours

export default async function Page(props: RouteProps) {
  const repos = await getRepos("dentolos19").catch(() => null);

  if (!repos)
    return (
      <main className={"grid place-items-center"}>
        <div className={"card bg-base-300"}>
          <div className={"card-body items-center text-center"}>
            <div className={"card-title"}>Oops!</div>
            <div>We are unable to fetch data from GitHub.</div>
          </div>
        </div>
      </main>
    );

  const currentFilter = filters.find(async (filter) => filter.topic === (await props.searchParams).topic) ?? filters[0];
  const filteredRepo = repos
    .filter(
      (repo) =>
        // remove repos marked with "personal"
        !repo.topics.includes("personal") &&
        // filter by topic, does not filter when topic is undefined
        (!currentFilter.topic || repo.topics.includes(currentFilter.topic)),
    )
    // sort the repos by stars
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[90%] space-y-2 md:w-[70%] lg:w-[50%]"}>
        <div className={"flex gap-2 overflow-x-auto"}>
          {filters.map((filter) => (
            <FilterSelector
              key={filter.topic}
              label={filter.label}
              name={"topic"}
              value={filter.topic}
              active={filter === currentFilter}
            />
          ))}
        </div>
        <div className={"flex flex-col gap-2"}>
          {filteredRepo.map((repo) => (
            <ProjectItem
              key={repo.full_name}
              data={{
                name: repo.name,
                description: repo.description,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                href: repo.html_url,
              }}
            />
          ))}
        </div>
        {currentFilter && (
          <div>
            <Link
              className={"btn btn-outline w-full"}
              href={`https://github.com/dentolos19?tab=repositories&q=topic%3A${currentFilter.topic}&sort=stargazers`}
            >
              View on GitHub
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}