import FormContainer from "@/components/form-container";
import FormInput from "@/components/ui/form-input";
import { setLink } from "@/lib/data/links";
import { patterns } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function Page() {
  const addAction = async (data: FormData) => {
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
      <FormContainer title={"Add Link"} actions={[{ label: "Add", color: "primary", action: addAction }]}>
        <FormInput type={"text"} name={"id"} label={"Identifier"} pattern={patterns.safeInput.source} required />
        <FormInput type={"url"} name={"url"} label={"Destination URL"} required />
      </FormContainer>
    </main>
  );
}