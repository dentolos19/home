import FormContainer from "@/components/form-container";
import FormInput from "@/components/ui/form-input";
import { storage } from "@/lib/integrations/appwrite";
import { patterns, renameFile } from "@/lib/utils";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";

export default function Page(props: RouteProps) {
  const bucketId = props.params.bucketId;

  const uploadAction = async (data: FormData) => {
    "use server";
    const id = data.get("id") as string;
    const file = data.get("file") as File;
    try {
      await storage.createFile(bucketId, id, renameFile(file, id));
    } catch (err) {
      console.error(err);
      redirect("/admin/error");
    } finally {
      redirect(`/admin/files/${bucketId}`);
    }
  };

  return (
    <main className={"grid place-items-center"}>
      <FormContainer title={"Upload File"} actions={[{ label: "Upload", color: "primary", action: uploadAction }]}>
        <FormInput type={"text"} name={"id"} label={"Identifier"} pattern={patterns.safeInput.source} required />
        <input className={"file-input"} type={"file"} name={"file"} required />
      </FormContainer>
    </main>
  );
}