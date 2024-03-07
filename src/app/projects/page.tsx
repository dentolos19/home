"use client";

import { getRepos } from "@/github";
import { use, useEffect, useState } from "react";

const filters = [
	{
		name: "All",
		topic: undefined,
	},
	{
		name: ".NET",
		topic: "dotnet",
	},
	{
		name: "TypeScript",
		topic: "web",
	},
	{
		name: "Python",
		topic: "python",
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
	const repos = use(getRepos("dentolos19"));

	const [filteredRepos, setFilteredRepos] = useState(repos);
	const [currentFilter, setCurrentFilter] = useState(filters[0]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		let filteredRepos = repos.filter(
			(repo) => !repo.topics.includes("personal"),
		);
		if (currentFilter.topic) {
			filteredRepos = repos.filter((repo) =>
				repo.topics.includes(currentFilter.topic),
			);
			setFilteredRepos(filteredRepos);
		} else {
			setFilteredRepos(filteredRepos);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentFilter]);

	return (
		<div className={"py-4 flex flex-col items-center gap-4"}>
			<div className={"w-[90%] sm:w-[80%] flex gap-2 overflow-y-auto"}>
				{filters.map((filter) => (
					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
					<span
						key={filter.topic}
						className={`px-3 py-2 min-w-fit text-xs rounded-xl cursor-pointer hover:bg-slate-700 ${
							filter.topic === currentFilter.topic ? "bg-slate-500" : "bg-slate-800"
						}`}
						onClick={filter.topic === currentFilter.topic ? undefined : () => setCurrentFilter(filter)}
					>
						{filter.name}
					</span>
				))}
			</div>
			{filteredRepos.map((repo) => (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div
					key={repo.full_name}
					className={
						"w-[90%] sm:w-[80%] px-4 py-2 " +
						"flex max-sm:flex-col items-center justify-between shadow rounded bg-slate-800 " +
						"transition hover:bg-slate-700 hover:cursor-pointer"
					}
					onClick={() => window.open(repo.html_url, "_blank")}
				>
					<div>
						<h1 className={"text-xl font-bold"}>{repo.name}</h1>
						<p>{repo.description}</p>
					</div>
					<div className={"max-sm:hidden"}>{repo.language}</div>
				</div>
			))}
		</div>
	);
}