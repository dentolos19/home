import NotFound from "@/app/not-found";
import Input from "@/components/ui/input";
import { deleteAsset, getAsset } from "@/lib/assets";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function Page(props: RouteProps) {
  const id = props.params.id;
  const record = await getAsset(id);

  if (!record) {
    return <NotFound />;
  }

  const handleDelete = async (data: FormData) => {
    "use server";
    const id = data.get("id") as string;
    const success = await deleteAsset(id);
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
          <h2 className={"card-title self-center"}>Edit Asset</h2>
          <div className={"my-2 flex flex-col gap-2"}>
            <Input type={"text"} name={"id"} label={"Identifier"} defaultValue={record.id} readOnly />
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