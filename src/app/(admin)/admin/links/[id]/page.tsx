import { deleteAction, setAction } from "@/app/(admin)/admin/links/actions";
import NotFound from "@/app/not-found";
import FormContainer from "@/components/form-container";
import FormControl from "@/components/ui/form-control";
import { getLink } from "@/lib/data/links";
import { RouteProps } from "@/types";

export const revalidate = 0;

export default async function Page(props: RouteProps) {
  const id = props.params.id;
  const record = await getLink(id);

  if (!record) {
    return <NotFound />;
  }

  return (
    <main className={"grid place-items-center"}>
      <FormContainer
        title={"Edit Link"}
        actions={[
          { label: "Save", color: "primary", action: setAction },
          { label: "Delete", color: "error", action: deleteAction },
        ]}
      >
        <FormControl label={"ID"}>
          <input className={"input"} type={"text"} name={"id"} defaultValue={record.id} readOnly />
        </FormControl>
        <FormControl label={"Destination URL"}>
          <input className={"input"} type={"text"} name={"url"} defaultValue={record.url} required />
        </FormControl>
      </FormContainer>
    </main>
  );
}