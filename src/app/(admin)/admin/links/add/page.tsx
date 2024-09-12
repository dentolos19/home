import { setAction } from "@/app/(admin)/admin/links/actions";
import FormContainer from "@/components/ui/form-container";
import FormControl from "@/components/ui/form-control";
import { patterns } from "@/lib/utils";

export default async function Page() {
  return (
    <main className={"grid place-items-center"}>
      <FormContainer title={"Add Link"} actions={[{ label: "Add", color: "primary", action: setAction }]}>
        <FormControl label={"ID"}>
          <input className={"input"} type={"text"} name={"id"} pattern={patterns.safeInput.source} required />
        </FormControl>
        <FormControl label={"Destination URL"}>
          <input className={"input"} type={"url"} name={"url"} required />
        </FormControl>
      </FormContainer>
    </main>
  );
}