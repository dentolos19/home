import NotFound from "@/app/not-found";
import { getPost } from "@/content";
import { RouteProps } from "@/types";
import Markdown from "react-markdown";

export default function Page(props: RouteProps) {
  const post = getPost(props.params.id);
  if (!post) {
    return <NotFound />;
  }
  return (
    <>
      <head>
        <meta name={"title"} content={post.title} />
        <meta name={"description"} content={post.excerpt} />
        <meta name={"og:title"} content={post.title} />
        <meta name={"og:description"} content={post.title} />
        {/* <meta name={"og:image"} content={post.imageSrc}/> */}
        <meta name={"twitter:title"} content={post.title} />
        <meta name={"twitter:description"} content={post.excerpt} />
        {/* <meta name={"twitter:image"} content={post.imageSrc}/> */}
      </head>
      <main className={"grid place-items-center"}>
        <div className={"my-4 card bg-base-300"}>
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