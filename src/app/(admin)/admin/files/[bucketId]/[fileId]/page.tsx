import NotFound from "@/app/not-found";
import FormContainer from "@/components/form-container";
import FormControl from "@/components/ui/form-control";
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

  const deleteAction = async () => {
    "use server";
    try {
      await storage.deleteFile(bucketId, fileId);
    } catch (err) {
      console.error(err);
      redirect("/admin/error");
    } finally {
      redirect(`/admin/files/${bucketId}`);
    }
  };

  return (
    <main className={"grid place-items-center"}>
      <FormContainer title={"Edit File"} actions={[{ label: "Delete", color: "error", action: deleteAction }]}>
        <FormControl label={"Identifier"}>
          <input className={"input"} type={"text"} name={"id"} defaultValue={file.$id} readOnly />
        </FormControl>
      </FormContainer>
    </main>
  );
}