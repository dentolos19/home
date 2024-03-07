"use client";

import { getRepos } from "@/github";
import { use } from "react";

export default function Page() {
	const repos = use(getRepos("dentolos19"));
	return (
		<div className={"py-4 flex flex-col items-center gap-4"}>
			{repos.map((repo) => (
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