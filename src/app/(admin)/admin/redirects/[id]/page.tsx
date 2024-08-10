import NotFound from "@/app/not-found";
import { getRedirect } from "@/content";
import { RouteProps } from "@/types";

export default async function Page(props: RouteProps) {
  const id = props.params.id;
  if (!id) {
    return <NotFound />;
  }
  const url = await getRedirect(id);
  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <div className={"card-body"}>
          <h2 className={"card-title"}>{id}</h2>
          <input className={"input"} type={"text"} value={url} />
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-sm btn-info"}>Edit</button>
            <button className={"btn btn-sm btn-error"}>Delete</button>
          </div>
        </div>
      </div>
    </main>
  );
}