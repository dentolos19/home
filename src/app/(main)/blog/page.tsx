import { getPosts } from "@/lib/blog";
import { updateSearchParams } from "@/lib/utils";
import { RouteProps } from "@/types";
import clsx from "clsx";
import Link from "next/link";

const filters = [
  {
    label: "All",
    category: undefined,
  },
  {
    label: "General",
    category: "general",
  },
  {
    label: "Guides",
    category: "guides",
  },
  // {
  //   label: "Stories",
  //   category: "stories",
  // },
];

export default async function Page(props: RouteProps) {
  const currentFilter = filters.find((filter) => filter.category === props.searchParams?.category) ?? filters[0];
  const posts = getPosts().filter(
    (post) => !post.draft && (!currentFilter.category || post.category.includes(currentFilter.category))
  );
  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[90%] md:w-[70%] lg:w-[50%] space-y-2"}>
        <div className={"flex gap-2 overflow-x-auto"}>
          {filters.map((filter) => (
            <Link
              key={filter.label}
              className={clsx("btn btn-sm", currentFilter === filter ? "btn-primary" : "btn-outline")}
              href={updateSearchParams("category", filter.category).href}
            >
              {filter.label}
            </Link>
          ))}
        </div>
        <div className={"flex flex-col gap-2"}>
          {posts.map((post) => (
            <Link
              key={post.id}
              className={"card cursor-pointer bg-base-300 hover:bg-base-200"}
              href={post.url || `/blog/${post.id}`}
            >
              <div className={"card-body"}>
                <h2 className={"card-title"}>{post.title}</h2>
                <p className={"text-xs text-gray-400"}>{post.date}</p>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}