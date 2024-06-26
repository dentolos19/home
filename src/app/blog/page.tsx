import { getPosts } from "@/app/blog/utils";
import Link from "next/link";

const filters = [
  {
    name: "All",
    category: undefined,
  },
  {
    name: "Guides",
    category: "guides",
  },
  {
    name: "Stories",
    category: "stories",
  },
];

export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const currentFilter = filters.find((filter) => filter.category === searchParams?.category) ?? filters[0];
  const posts = getPosts().filter(
    (repo) => !currentFilter.category || repo.metadata.category.includes(currentFilter.category),
  );
  return (
    <div className={"py-4 flex flex-col items-center"}>
      <div className={"w-[90%] lg:w-[60%]"}>
        <div className={"mb-2 flex gap-2 overflow-y-auto"}>
          {filters.map((filter) => (
            <Link
              key={filter.category}
              className={`px-3 py-2 min-w-fit text-xs rounded-xl cursor-pointer hover:bg-slate-700 ${
                filter.category === currentFilter.category ? "bg-slate-500" : "bg-slate-800"
              }`}
              href={filter.category ? `?category=${filter.category}` : "/blog"}
            >
              {filter.name}
            </Link>
          ))}
        </div>
        <div className={"flex flex-col gap-2"}>
          {posts.map((post) => (
            <Link
              key={post.id}
              className={"p-4 shadow rounded bg-slate-800 transition hover:bg-slate-700"}
              href={`/blog/${post.id}`}
            >
              <div>
                <h1 className={"text-2xl font-bold"}>{post.metadata.title}</h1>
                <p className={"line-clamp-2 text-sm text-slate-300"}>{post.metadata.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}