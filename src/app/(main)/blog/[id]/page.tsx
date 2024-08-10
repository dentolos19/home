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
    <main className={"grid place-items-center"}>
      <div className={"my-4 card bg-base-300"}>
        <div className={"card-body"}>
          <p className={"prose"}>
            <Markdown>{post.content}</Markdown>
          </p>
        </div>
      </div>
    </main>
  );
}