import { getPost } from "@/app/blog/utils";
import Markdown from "react-markdown";

export default function Page({ params }: { params: { id: string } }) {
  const post = getPost(params.id);
  return (
    <div className={"min-h-full grid place-items-center"}>
      <div className={"w-[90%] md:w-[70%] xl:w-[60%] h-fit my-4 p-6 shadow rounded bg-slate-800"}>
        <Markdown className={"max-w-full prose prose-sm prose-slate prose-invert prose-headings:my-3"}>
          {post?.content}
        </Markdown>
      </div>
    </div>
  );
}