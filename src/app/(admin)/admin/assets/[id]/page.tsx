import NotFound from "@/app/not-found";
import FormContainer from "@/components/form-container";
import FormControl from "@/components/ui/form-control";
import { deleteAsset, getAsset } from "@/lib/data/assets";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function Page(props: RouteProps) {
  const id = props.params.id;
  const record = await getAsset(id);

  if (!record) {
    return <NotFound />;
  }

  const deleteAction = async () => {
    "use server";
    const success = await deleteAsset(id);
    if (success) {
      redirect("/admin/assets");
    } else {
      redirect("/admin/error");
    }
  };

  return (
    <main className={"grid place-items-center"}>
      <FormContainer title={"Edit Asset"} actions={[{ label: "Delete", color: "error", action: deleteAction }]}>
        <FormControl label={"Identifier"}>
          <input className={"input"} type={"text"} name={"id"} defaultValue={record.id} readOnly />
        </FormControl>
        <FormControl label={"Identifier"}>
          <input className={"input"} type={"text"} name={"bucketId"} defaultValue={record.bucketId} readOnly />
        </FormControl>
        <FormControl label={"Identifier"}>
          <input className={"input"} type={"text"} name={"fileId"} defaultValue={record.fileId} readOnly />
        </FormControl>
      </FormContainer>
    </main>
  );
}