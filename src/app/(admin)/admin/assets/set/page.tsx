"use client";

import { setAction } from "@/app/(admin)/admin/assets/actions";
import FormContainer from "@/components/form-container";
import FormControl from "@/components/ui/form-control";
import { storage, storageIds } from "@/lib/integrations/appwrite";
import { patterns } from "@/lib/utils";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const [fileIds, setFileIds] = useState<string[] | undefined>([]);

  const onBucketIdChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const bucketId = event.target.value;
    setFileIds(undefined);
    if (bucketId === "media") {
      storage.listFiles("media").then((response) => {
        setFileIds(response.files.map((file) => file.$id));
      });
    } else {
      setFileIds([]);
    }
  };

  const bucketIds = Object.entries(storageIds);

  return (
    <main className={"grid place-items-center"}>
      <FormContainer title={"Set Asset"} actions={[{ label: "Set", color: "primary", action: setAction }]}>
        <FormControl label={"Identifier"}>
          <input className={"input"} type={"text"} name={"id"} pattern={patterns.safeInput.source} required />
        </FormControl>
        <FormControl label={"Bucket ID"}>
          <select className={"select"} name={"bucketId"} onChange={onBucketIdChange}>
            <option disabled selected>
              Select a bucket
            </option>
            {bucketIds.map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </FormControl>
        <FormControl label={"File ID"}>
          <select className={"select"} name={"fileId"}>
            {fileIds ? (
              <>
                <option disabled selected>
                  Select a file
                </option>
                {fileIds.map((id) => (
                  <option key={id} value={id}>
                    {id}
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
      </FormContainer>
    </main>
  );
}