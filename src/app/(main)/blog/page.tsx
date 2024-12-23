import PostItem from "@/app/(main)/blog/_components/post-item";
import FilterSelector from "@/components/filter-selector";
import { getPosts } from "@/lib/data/blog";
import { RouteProps } from "@/types";
import { Metadata } from "next";

const filters = [
  {
    label: "All",
    category: undefined,
  },
  {
    label: "Experiences",
    category: "experiences",
  },
  {
    label: "Stories",
    category: "stories",
  },
];

export const metadata: Metadata = {
  title: "Dennise's Blog",
};

export default async function Page(props: RouteProps) {
  const { category } = await props.searchParams;
  const posts = getPosts();

  const currentFilter = filters.find((filter) => filter.category === category) ?? filters[0];
  const filteredPosts = posts.filter(
    (post) =>
      // Removes post marked as draft
      !post.draft &&
      // Filter by category, does not filter when category is undefined
      (!currentFilter.category || post.category.includes(currentFilter.category)),
  );

  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[90%] space-y-2 md:w-[70%] lg:w-[50%]"}>
        <div className={"flex gap-2 overflow-x-auto"}>
          {filters.map((filter) => (
            <FilterSelector
              key={filter.category}
              label={filter.label}
              name={"category"}
              value={filter.category}
              active={filter === currentFilter}
            />
          ))}
        </div>
        <div className={"flex flex-col gap-2"}>
          {filteredPosts.map((post) => (
            <PostItem
              key={post.id}
              data={{
                title: post.title,
                excerpt: post.excerpt,
                date: post.date,
                href: post.url || `/blog/${post.id}`,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}