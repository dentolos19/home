import { promises as fs } from "fs";
import path from "path";
import Markdown from "react-markdown";

export default async function Page() {
	const file = await fs.readFile(
		path.join(process.cwd(), "src", "about.md"),
		"utf-8",
	);
	return (
		<div className={"h-full flex md:items-center justify-center"}>
			<div
				className={
					"w-[90%] md:w-[70%] xl:w-[50%] h-fit my-4 p-6 shadow rounded bg-slate-800"
				}
			>
				<Markdown
					className={
						"max-w-full prose prose-sm prose-slate prose-invert prose-headings:my-3"
					}
				>
					{file}
				</Markdown>
			</div>
		</div>
	);
}