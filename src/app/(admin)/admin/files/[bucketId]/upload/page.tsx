"use client";

import { uploadFileAction } from "@/app/(admin)/admin/files/actions";
import FormContainer from "@/components/ui/form-container";
import FormControl from "@/components/ui/form-control";
import { patterns, replaceFormValue } from "@/lib/utils";
import { RouteProps } from "@/types";

export default function Page(props: RouteProps) {
  const bucketId = props.params.bucketId;

  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    replaceFormValue(event.target.form!, "name", event.target.files![0].name.replace(/\.[^/.]+$/, ""));
  };

  return (
    <main className={"grid place-items-center"}>
      <FormContainer title={"Upload File"} actions={[{ label: "Upload", color: "primary", action: uploadFileAction }]}>
        <input className={"hidden"} name={"bucketId"} value={bucketId} />
        <input className={"file-input"} type={"file"} name={"file"} required onChange={onFileChange} />
        <FormControl label={"Name"}>
          <input className={"input"} type={"text"} name={"name"} pattern={patterns.safeInput.source} required />
        </FormControl>
      </FormContainer>
    </main>
  );
}