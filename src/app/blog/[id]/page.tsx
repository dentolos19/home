import NotFoundPage from "@/app/not-found";
import { getPost } from "@/blog";
import Markdown from "react-markdown";

export default function Page({ params }: { params: { id: string } }) {
  const post = getPost(params.id);
  if (!post) {
    return <NotFoundPage />;
  }
  return (
    <div className={"min-h-full grid place-items-center"}>
      <div className={"w-[90%] xl:w-[70%] h-fit my-4 shadow rounded overflow-hidden bg-slate-800"}>
        <div className={"p-4 grid lg:grid-cols-[1fr_auto] max-lg:grid-rows-[auto_auto] bg-slate-900"}>
          <div className={"line-clamp-2 text-3xl font-bold"}>{post?.metadata.title}</div>
          <div className={"lg:flex lg:justify-end lg:items-center text-sm text-slate-300"}>{post?.metadata.date}</div>
        </div>
        <Markdown className={"px-6 py-4 max-w-full prose prose-sm prose-slate prose-invert prose-headings:my-3"}>
          {post?.content}
        </Markdown>
      </div>
    </div>
  );
}