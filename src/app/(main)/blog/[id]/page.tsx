import NotFoundBoundary from "@/app/not-found";
import { getPost } from "@/lib/data/blog";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";
import Markdown from "react-markdown";

export default async function Page(props: RouteProps) {
  const post = getPost((await props.params).id);

  if (!post) return <NotFoundBoundary />;
  if (post.url) return redirect(post.url);

  return (
    <>
      <head>
        <meta name={"title"} content={post.title} />
        <meta name={"description"} content={post.excerpt} />
        <meta name={"og:title"} content={post.title} />
        <meta name={"og:description"} content={post.excerpt} />
        {/* <meta name={"og:image"} content={post.imageSrc}/> */}
        <meta name={"twitter:title"} content={post.title} />
        <meta name={"twitter:description"} content={post.excerpt} />
        {/* <meta name={"twitter:image"} content={post.imageSrc}/> */}
      </head>
      <main className={"grid place-items-center"}>
        <div className={"card my-4 bg-base-300"}>
          <div className={"card-body"}>
            <p className={"prose"}>
              <Markdown>{post.content}</Markdown>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}