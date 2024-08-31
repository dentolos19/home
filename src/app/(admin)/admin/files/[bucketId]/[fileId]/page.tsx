import { deleteAction } from "@/app/(admin)/admin/assets/actions";
import NotFound from "@/app/not-found";
import FormContainer from "@/components/form-container";
import FormControl from "@/components/ui/form-control";
import { storage } from "@/lib/integrations/appwrite";
import { RouteProps } from "@/types";

export const revalidate = 0;

export default async function Page(props: RouteProps) {
  const bucketId = props.params.bucketId;
  const fileId = props.params.fileId;
  const file = await storage.getFile(bucketId, fileId).catch(() => undefined);

  if (!file) {
    return <NotFound />;
  }

  return (
    <main className={"grid place-items-center"}>
      <FormContainer title={"Edit File"} actions={[{ label: "Delete", color: "error", action: deleteAction }]}>
        <input className={"hidden"} name={"bucketId"} value={bucketId} />
        <FormControl label={"ID"}>
          <input className={"input"} type={"text"} name={"fileId"} defaultValue={file.$id} readOnly />
        </FormControl>
        <FormControl label={"Name"}>
          <input className={"input"} type={"text"} name={"name"} defaultValue={file.name} readOnly />
        </FormControl>
      </FormContainer>
    </main>
  );
}