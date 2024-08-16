import NotFound from "@/app/not-found";
import { deleteLink, getLink, setLink } from "@/lib/links";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function Page(props: RouteProps) {
  const id = props.params.id;
  const record = await getLink(id);

  if (!record) {
    return <NotFound />;
  }

  const handleSave = async (data: FormData) => {
    "use server";
    const id = data.get("id") as string;
    const url = data.get("url") as string;
    const success = await setLink(id, {
      url,
    });
    if (success) {
      redirect("/admin/links");
    } else {
      redirect("/admin/error");
    }
  };

  const handleDelete = async (data: FormData) => {
    "use server";
    const id = data.get("id") as string;
    const success = await deleteLink(id);
    if (success) {
      redirect("/admin/links");
    } else {
      redirect("/admin/error");
    }
  };

  return (
    <main className={"grid place-items-center"}>
      <div className={"w-96 card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>Edit Link</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <input
              className={"input"}
              type={"text"}
              name={"id"}
              required={true}
              readOnly={true}
              placeholder={"ID"}
              defaultValue={record?.id}
            />
            <input
              className={"input"}
              type={"url"}
              name={"url"}
              required={true}
              placeholder={"URL"}
              defaultValue={record?.url}
            />
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-sm btn-primary"} formAction={handleSave}>
              Save
            </button>
            <button className={"btn btn-sm btn-error"} formAction={handleDelete}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}