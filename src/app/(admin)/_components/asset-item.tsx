"use client";

import { MyAsset } from "@/lib/data/assets";
import { storage } from "@/lib/integrations/appwrite";
import Link from "next/link";

type AssetItemProps = {
  data: MyAsset;
};

export default function AssetItem(props: AssetItemProps) {
  const previewUrl = storage.getFilePreview(props.data.bucketId, props.data.fileId, 100, 100);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://dennise.me/assets/${props.data.id}`);
  };

  return (
    <div className={"flex h-16 rounded-box bg-base-300 sm:h-24"}>
      <img className={"w-16 rounded-l-box object-cover sm:w-24"} src={previewUrl} alt={"Preview"} />
      <div className={"flex min-w-0 flex-1 flex-col justify-center p-1 pl-4"}>
        <h2 className={"truncate text-lg font-bold"}>{props.data.id}</h2>
        <p className={"truncate text-sm text-gray-400"}>
          {props.data.bucketId}/{props.data.fileId}
        </p>
      </div>
      <div className={"flex items-center pr-4"}>
        <div className={"tooltip"} data-tip={"Edit"}>
          <Link className={"btn btn-ghost btn-sm"} href={`/admin/assets/${props.data.id}`}>
            <i className={"fa-solid fa-pen"} />
          </Link>
        </div>
        <div className={"tooltip"} data-tip={"Copy"}>
          <button className={"btn btn-ghost btn-sm"} onClick={handleCopy}>
            <i className={"fa-solid fa-copy"} />
          </button>
        </div>
      </div>
    </div>
  );
}