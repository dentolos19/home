"use client";

import { getRepos } from "@/github";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { use } from "react";

const filters = [
	{
		name: "All",
		topic: undefined,
	},
	{
		name: ".NET (C#)",
		topic: "dotnet",
	},
	{
		name: "Web (JS/TS)",
		topic: "web",
	},
	{
		name: "Python",
		topic: "python",
	},
  {
    name: "Rust",
    topic: "rust",
  },
	{
		name: "Games",
		topic: "game",
	},
	{
		name: "VSCode Extensions",
		topic: "vscode-extension",
	},
];

export default function Page() {
  const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentFilter =
		filters.find((filter) => filter.topic === searchParams.get("topic")) ??
		filters[0];
	const repos = use(getRepos("dentolos19"))
		.filter((repo) => !repo.topics.includes("personal"))
		.sort((a, b) => b.stargazers_count - a.stargazers_count)
		.filter(
			(repo) =>
				!currentFilter.topic || repo.topics.includes(currentFilter.topic),
		);
	return (
		<div className={"py-4 flex flex-col items-center gap-4"}>
			<div className={"w-[90%] lg:w-[60%] flex gap-2 overflow-y-auto"}>
				{filters.map((filter) => (
					<Link
						key={filter.topic}
						className={`px-3 py-2 min-w-fit text-xs rounded-xl cursor-pointer hover:bg-slate-700 ${
							filter.topic === currentFilter.topic
								? "bg-slate-500"
								: "bg-slate-800"
						}`}
						href={filter.topic ? `?topic=${filter.topic}` : pathname}
					>
						{filter.name}
					</Link>
				))}
			</div>
			{repos.map((repo) => (
				<Link
					key={repo.full_name}
					className={
						"w-[90%] lg:w-[60%] p-4 " +
						"flex max-md:flex-col md:items-center justify-between shadow rounded bg-slate-800 " +
						"transition hover:bg-slate-700"
					}
					href={repo.html_url}
				>
					<div>
						<h1 className={"text-2xl font-bold"}>{repo.name}</h1>
						<p className={"line-clamp-2 text-sm text-slate-300"}>{repo.description}</p>
					</div>
					<div className={"max-md:mt-2"}>
						<i className={"fa-solid fa-star"} />
						<span className={"ml-1"}>{repo.stargazers_count}</span>
					</div>
				</Link>
			))}
		</div>
	);
}