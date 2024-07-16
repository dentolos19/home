import { promises as fs } from "node:fs";
import path from "node:path";
import Markdown from "react-markdown";

export default async function Page() {
  const content = await fs.readFile(
    path.join(process.cwd(), "src", "data", "about.md"),
    "utf-8"
  );

  return (
    <main className={"grid place-items-center"}>
      <div
        className={
          "w-[90%] md:w-[70%] xl:w-[60%] h-fit my-4 p-6 shadow rounded bg-slate-800"
        }
      >
        <Markdown
          className={
            "max-w-full prose prose-sm prose-slate prose-invert prose-headings:my-3"
          }
        >
          {content}
        </Markdown>
      </div>
    </main>
  );
}