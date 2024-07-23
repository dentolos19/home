import fs from "node:fs/promises";
import path from "node:path";
import Markdown from "react-markdown";

export default async function NotFound() {
  const content = await fs.readFile(
    path.join(process.cwd(), "src", "data", "about.md"),
    "utf-8"
  );

  return (
    <main className={"py-4 grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <div className={"card-body"}>
          <Markdown className={"prose"}>{content}</Markdown>
        </div>
      </div>
    </main>
  );
}