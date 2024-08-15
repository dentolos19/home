import NotFound from "@/app/not-found";
import { deleteAssetFile, downloadAssetFile, getAssetFile } from "@/lib/backend";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";

export default async function Page(props: RouteProps) {
  const id = props.params.id;

  if (!id) {
    return <NotFound />;
  }

  const record = await getAssetFile(id);

  const handleDownload = async (data: FormData) => {
    "use server";

    const id = data.get("id") as string;

    if (!id) {
      return;
    }

    const url = await downloadAssetFile(id);

    if (url) {
      redirect(url.href);
    } else {
      redirect("/admin/error");
    }
  };

  const handleDelete = async (data: FormData) => {
    "use server";

    const id = data.get("id") as string;

    if (!id) {
      return;
    }

    const success = await deleteAssetFile(id);

    if (success) {
      redirect("/admin/files");
    } else {
      redirect("/admin/error");
    }
  };

  return (
    <main className={"grid place-items-center"}>
      <div className={"w-96 card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>Edit File</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <input
              className={"input"}
              type={"text"}
              name={"id"}
              required={true}
              readOnly={true}
              placeholder={"ID"}
              defaultValue={record?.$id}
            />
            <input
              className={"input"}
              type={"url"}
              name={"url"}
              required={true}
              readOnly={true}
              placeholder={"URL"}
              defaultValue={record?.name}
            />
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-sm btn-info"} formAction={handleDownload}>
              Download
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