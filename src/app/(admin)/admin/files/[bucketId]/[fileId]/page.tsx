import NotFound from "@/app/not-found";
import { storage } from "@/lib/backend";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";

export default async function Page(props: RouteProps) {
  const bucketId = props.params.bucketId;
  const fileId = props.params.fileId;

  if (!fileId) {
    return <NotFound />;
  }

  const file = await storage.getFile(bucketId, fileId);

  const handleDownload = async () => {
    "use server";
    try {
      const url = await storage.getFileDownload(bucketId, fileId);
      redirect(url.href);
    } catch {
      redirect("/admin/error");
    }
  };

  const handleDelete = async () => {
    "use server";
    try {
      await storage.deleteFile(bucketId, fileId);
      redirect(`/admin/files/${bucketId}`);
    } catch {
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
              defaultValue={file?.$id}
            />
            <input
              className={"input"}
              type={"url"}
              name={"url"}
              required={true}
              readOnly={true}
              placeholder={"URL"}
              defaultValue={file?.name}
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