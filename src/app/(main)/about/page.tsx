import { getInternalFile } from "@/content";
import Markdown from "react-markdown";

export default async function Page() {
  const content = await getInternalFile("about.md");
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