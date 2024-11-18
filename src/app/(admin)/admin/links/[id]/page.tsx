import { deleteLinkAction, setLinkAction } from "@/app/(admin)/admin/links/actions";
import NotFoundPage from "@/app/not-found";
import FormContainer from "@/components/ui/form-container";
import FormControl from "@/components/ui/form-control";
import { getLink } from "@/lib/data/links";
import { RouteProps } from "@/types";

export const revalidate = 0;

export default async function Page(props: RouteProps) {
  const id = (await props.params).id;
  const record = await getLink(id);

  if (!record) return <NotFoundPage />;

  return (
    <main className={"grid place-items-center"}>
      <FormContainer
        title={"Edit Link"}
        actions={[
          { label: "Save", color: "primary", action: setLinkAction },
          { label: "Delete", color: "error", action: deleteLinkAction },
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