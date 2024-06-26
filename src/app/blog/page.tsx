import { getPosts } from "@/app/blog/utils";
import Link from "next/link";

export default function Page() {
  const posts = getPosts();
  return (
    <div className={"py-4 flex flex-col items-center gap-4"}>
      {posts.map((post) => (
        <Link
          key={post.id}
          className={"w-[90%] lg:w-[60%] p-4 " + "shadow rounded bg-slate-800 " + "transition hover:bg-slate-700"}
          href={`/blog/${post.id}`}
        >
          <div>
            <h1 className={"text-2xl font-bold"}>{post.metadata.title}</h1>
            <p className={"line-clamp-2 text-sm text-slate-300"}>{post.metadata.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}