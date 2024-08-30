import FormContainer from "@/components/form-container";
import FormControl from "@/components/ui/form-control";
import { setAsset } from "@/lib/data/assets";
import { patterns } from "@/lib/utils";
import { redirect } from "next/navigation";

export default function Page() {
  const uploadAction = async (data: FormData) => {
    "use server";
    const id = data.get("id") as string;
    const bucketId = data.get("bucketId") as string;
    const fileId = data.get("fileId") as string;
    const success = await setAsset(id, {
      bucketId,
      fileId,
    });
    if (success) {
      redirect("/admin/assets");
    } else {
      redirect("/admin/error");
    }
  };

  return (
    <main className={"grid place-items-center"}>
      <FormContainer title={"Set Asset"} actions={[{ label: "Set", color: "primary", action: uploadAction }]}>
        <FormControl label={"Identifier"}>
          <input className={"input"} type={"text"} name={"id"} pattern={patterns.safeInput.source} required />
        </FormControl>
        <FormControl label={"Bucket ID"}>
          <input className={"input"} type={"text"} name={"bucketId"} pattern={patterns.safeInput.source} required />
        </FormControl>
        <FormControl label={"File ID"}>
          <input className={"input"} type={"text"} name={"fileId"} pattern={patterns.safeInput.source} required />
        </FormControl>
      </FormContainer>
    </main>
  );
}