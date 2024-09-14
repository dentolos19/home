"use client";

import { setAssetAction } from "@/app/(admin)/admin/assets/actions";
import FormContainer from "@/components/ui/form-container";
import FormControl from "@/components/ui/form-control";
import { storage, storageIds } from "@/lib/integrations/appwrite";
import { patterns, replaceFormValue } from "@/lib/utils";
import { Models } from "appwrite";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const [files, setFiles] = useState<Models.File[] | undefined>([]);

  const onBucketChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const bucketId = event.target.value;
    setFiles(undefined);
    if (bucketId === "media") {
      storage.listFiles("media").then((res) => {
        setFiles(res.files);
      });
    } else {
      setFiles([]);
    }
  };

  const onFileChange = (event: ChangeEvent<HTMLSelectElement>) => {
    replaceFormValue(event.target.form!, "id", event.target.value!.replace(/\.[^/.]+$/, ""));
  };

  const buckets = Object.entries(storageIds);

  return (
    <main className={"grid place-items-center"}>
      <FormContainer title={"Set Asset"} actions={[{ label: "Set", color: "primary", action: setAssetAction }]}>
        <FormControl label={"Bucket ID"}>
          <select className={"select"} name={"bucketId"} onChange={onBucketChange}>
            <option disabled selected>
              Select a bucket
            </option>
            {buckets.map(([id, data]) => (
              <option key={id} value={data.id}>
                {data.label}
              </option>
            ))}
          </select>
        </FormControl>
        <FormControl label={"File ID"}>
          <select className={"select"} name={"fileId"} onChange={onFileChange}>
            {files ? (
              <>
                <option disabled selected>
                  Select a file
                </option>
                {files.map((file) => (
                  <option key={file.$id} value={file.$id}>
                    {file.name}
                  </option>
                ))}
              </>
            ) : (
              <option disabled selected>
                Loading...
              </option>
            )}
          </select>
        </FormControl>
        <div className={"form-control"}>
          <label className={"label cursor-pointer"}>
            <span className={"label-text"}>Is Downloadable</span>
            <input className={"checkbox"} type={"checkbox"} name={"download"} />
          </label>
        </div>
        <FormControl label={"ID"}>
          <input className={"input"} type={"text"} name={"id"} pattern={patterns.safeInput.source} required />
        </FormControl>
      </FormContainer>
    </main>
  );
}