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
    navigator.clipboard.writeText(`https://dennise.me/assets?id=${props.data.id}`);
  };

  return (
    <div className={"h-16 sm:h-24 flex rounded-box bg-base-300"}>
      <img className={"w-16 sm:w-24 object-cover rounded-l-box"} src={previewUrl} alt={"Preview"} />
      <div className={"pl-4 min-w-0 flex-1 flex flex-col justify-center"}>
        <h2 className={"text-lg font-bold truncate"}>{props.data.id}</h2>
        <p className={"text-sm text-gray-400 truncate"}>{props.data.bucketId}/{props.data.fileId}</p>
      </div>
      <div className={"pr-4 flex items-center"}>
        <div className={"tooltip"} data-tip={"Edit"}>
          <Link className={"btn btn-sm btn-ghost"} href={`/admin/assets/${props.data.id}`}>
            <i className={"fa-solid fa-pen"} />
          </Link>
        </div>
        <div className={"tooltip"} data-tip={"Copy"}>
          <button className={"btn btn-sm btn-ghost"} onClick={handleCopy}>
            <i className={"fa-solid fa-copy"} />
          </button>
        </div>
      </div>
    </div>
  );
}