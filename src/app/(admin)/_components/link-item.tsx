"use client";

import { Link as LinkData } from "@/lib/data/links";
import Link from "next/link";

type LinkItemProps = {
  data: LinkData;
};

export default function LinkItem(props: LinkItemProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(`https://dennise.me/go/${props.data.id}`);
  };

  return (
    <div key={props.data.id} className={"flex rounded-box bg-base-300 p-4"}>
      <div className={"flex min-w-0 flex-1 flex-col justify-center"}>
        <div className={"truncate text-lg font-bold"}>{props.data.id}</div>
        <div className={"truncate text-sm text-gray-400"}>{props.data.url}</div>
      </div>
      <div className={"flex items-center"}>
        <div className={"tooltip"} data-tip={"Edit"}>
          <Link className={"btn btn-ghost btn-sm"} href={`/admin/links/${props.data.id}`}>
            <i className={"fa-solid fa-pen"} />
          </Link>
        </div>
        <div className={"tooltip"} data-tip={"Visit"}>
          <Link className={"btn btn-ghost btn-sm"} target={"_blank"} href={props.data.url}>
            <i className={"fa-arrow-up-right-from-square fa-solid"} />
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