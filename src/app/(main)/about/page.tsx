import { getLocalFile } from "@/lib/local";
import { Metadata } from "next";
import Markdown from "react-markdown";

export const metadata: Metadata = {
  title: "About Dennise",
};

export default function Page() {
  const content = getLocalFile("about.md");
  return (
    <main className={"grid place-items-center py-4"}>
      <div className={"card bg-base-300"}>
        <div className={"card-body"}>
          <Markdown className={"prose"}>{content}</Markdown>
        </div>
      </div>
    </main>
  );
}