"use client";

import { AssetFile } from "@/lib/assets";
import { storage } from "@/lib/backend";
import Link from "next/link";

export default function AssetItem(props: { data: AssetFile }) {
  let previewUrl = "";

  if (props.data.type === "media" && props.data.bucketId && props.data.fileId) {
    previewUrl = storage.getFilePreview(props.data.bucketId, props.data.fileId).href;
  } else if (props.data.type === "media" && props.data.url) {
    previewUrl = props.data.url;
  } else {
    previewUrl = "/assets/file.png";
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://dennise.me/assets?id=${props.data.id}`);
  };

  return (
    <div key={props.data.id} className={"h-16 sm:h-24 flex rounded-box bg-base-300"}>
      <img className={"w-16 sm:w-24 rounded-l-box"} src={previewUrl} alt={"Preview"} />
      <div className={"pl-4 min-w-0 flex-1 flex flex-col justify-center"}>
        <h2 className={"text-lg font-bold truncate"}>{props.data.id}</h2>
        {/* <p className={"text-sm text-gray-400 truncate"}>{props.data.url}</p> */}
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