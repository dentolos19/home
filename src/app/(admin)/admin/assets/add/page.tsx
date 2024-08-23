import Input from "@/components/ui/input";
import { AssetFileRecord, setAsset } from "@/lib/assets";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";

export default async function Page(props: RouteProps) {
  const handleAdd = async (data: FormData) => {
    "use server";

    const id = data.get("id") as string;
    const category = data.get("category") as string;
    const bucketId = data.get("bucketId") as string;
    const fileId = data.get("fileId") as string;
    const url = data.get("url") as string;

    let record: AssetFileRecord = {
      type: "file",
    };

    if (category === "bucket") {
      record = {
        ...record,
        bucketId,
        fileId,
      };
    } else if (category === "url") {
      record = {
        ...record,
        url,
      };
    }

    const success = await setAsset(id, record);

    if (success) {
      redirect("/admin/assets");
    } else {
      redirect("/admin/error");
    }
  };

  return (
    <main className={"grid place-items-center"}>
      <div className={"w-96 card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>Add Asset</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <Input type={"text"} name={"id"} label={"Identifier"} required />

            <div className={"collapse collapse-arrow bg-base-200"}>
              <input type={"radio"} name={"category"} value={"bucket"} defaultChecked />
              <div className="collapse-title">Bucket File</div>
              <div className="collapse-content">
                <Input type={"text"} name={"bucketId"} label={"Bucket ID"} />
                <Input type={"text"} name={"fileId"} label={"File ID"} />
              </div>
            </div>

            <div className={"collapse collapse-arrow bg-base-200"}>
              <input type={"radio"} name={"category"} value={"url"} />
              <div className="collapse-title">Direct URL</div>
              <div className="collapse-content">
                <Input type={"text"} name={"url"} label={"URL"} />
              </div>
            </div>
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-sm btn-primary"} formAction={handleAdd}>
              Add
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}