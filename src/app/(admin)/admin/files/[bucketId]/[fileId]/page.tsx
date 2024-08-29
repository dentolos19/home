import NotFound from "@/app/not-found";
import { storage } from "@/lib/integrations/appwrite";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function Page(props: RouteProps) {
  const bucketId = props.params.bucketId;
  const fileId = props.params.fileId;
  const file = await storage.getFile(bucketId, fileId).catch(() => undefined);

  if (!file) {
    return <NotFound />;
  }

  const handleDelete = async () => {
    "use server";
    try {
      await storage.deleteFile(bucketId, fileId);
      redirect(`/admin/files/${bucketId}`);
    } catch (err) {
      console.error(err);
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
            <button className={"btn btn-sm btn-error"} formAction={handleDelete}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}