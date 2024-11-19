import NotFoundPage from "@/app/not-found";
import { getPost } from "@/lib/data/blog";
import { RouteProps } from "@/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Markdown from "react-markdown";

export async function generateMetadata(props: RouteProps) {
  const post = getPost((await props.params).id);
  if (!post) return {} satisfies Metadata;
  return {
    title: `${post.title} | Dennise's Blog`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  } satisfies Metadata;
}

export default async function Page(props: RouteProps) {
  const post = getPost((await props.params).id);

  if (!post) return <NotFoundPage />;
  if (post.url) return redirect(post.url);

  return (
    <main className={"grid place-items-center"}>
      <div className={"card my-4 bg-base-300"}>
        <div className={"card-body"}>
          <p className={"prose"}>
            <Markdown>{post.content}</Markdown>
          </p>
        </div>
      </div>
    </main>
  );
}