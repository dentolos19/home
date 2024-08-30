import NotFound from "@/app/not-found";
import FormContainer from "@/components/form-container";
import FormControl from "@/components/ui/form-control";
import { deleteLink, getLink, setLink } from "@/lib/data/links";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function Page(props: RouteProps) {
  const id = props.params.id;
  const record = await getLink(id);

  if (!record) {
    return <NotFound />;
  }

  const saveAction = async (data: FormData) => {
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

  const deleteAction = async (data: FormData) => {
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
      <FormContainer
        title={"Edit Link"}
        actions={[
          { label: "Save", color: "primary", action: saveAction },
          { label: "Delete", color: "error", action: deleteAction },
        ]}
      >
        <FormControl label={"Identifier"}>
          <input className={"input"} type={"text"} name={"id"} defaultValue={record.id} readOnly />
        </FormControl>
        <FormControl label={"Destination URL"}>
          <input className={"input"} type={"text"} name={"url"} defaultValue={record.url} required />
        </FormControl>
      </FormContainer>
    </main>
  );
}