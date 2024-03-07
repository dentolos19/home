import { promises as fs } from "fs";
import path from "path";
import Markdown from "react-markdown";
import styles from "./page.module.css";

export default async function Page() {
	const file = await fs.readFile(
		path.join(process.cwd(), "src", "about.md"),
		"utf-8",
	);
	return (
		<div className={"h-full flex items-center justify-center"}>
			<div
				className={
					"w-[90%] sm:w-[60%] h-fit my-4 p-6 shadow rounded bg-slate-800"
				}
			>
				<Markdown className={styles.markdown}>{file}</Markdown>
			</div>
		</div>
	);
}