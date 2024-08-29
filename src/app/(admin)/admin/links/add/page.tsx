import MyInput from "@/components/ui/input";
import { setLink } from "@/lib/data/links";
import { redirect } from "next/navigation";

export default async function Page() {
  const handleAdd = async (data: FormData) => {
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

  return (
    <main className={"grid place-items-center"}>
      <div className={"w-96 card bg-base-300"}>
        <form className={"card-body"}>
          <h2 className={"card-title self-center"}>Add Link</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <MyInput type={"text"} name={"id"} label={"Identifier"} required />
            <MyInput type={"url"} name={"url"} label={"Destination URL"} required />
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