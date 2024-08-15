import { assetBucketId, storage } from "@/lib/backend";
import { ID } from "appwrite";
import { redirect } from "next/navigation";

export default function Page() {
  const handleUpload = async (data: FormData) => {
    "use server";

    const file = data.get("file") as File;
    try {
      await storage.createFile(assetBucketId, ID.unique(), file);
      redirect("/admin/files");
    } catch {
      redirect("/admin/error");
    }
  };

  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>Upload File</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <input className={"file-input"} type={"file"} name={"file"} required={true} />
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-sm btn-primary"} formAction={handleUpload}>
              Upload
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}