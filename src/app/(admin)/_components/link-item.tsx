"use client";

import { Redirect } from "@/lib/links";
import Link from "next/link";

export default function LinkItem(props: { data: Redirect }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(`https://dennise.me/go/${props.data.id}`);
  };

  return (
    <div key={props.data.id} className={"p-4 flex rounded-box bg-base-300"}>
      <div className={"min-w-0 flex-1 flex flex-col justify-center"}>
        <h2 className={"text-lg font-bold truncate"}>{props.data.id}</h2>
        <p className={"text-sm text-gray-400 truncate"}>{props.data.url}</p>
      </div>
      <div className={"flex items-center"}>
        <div className={"tooltip"} data-tip={"Edit"}>
          <Link className={"btn btn-sm btn-ghost"} href={`/admin/links/${props.data.id}`}>
            <i className={"fa-solid fa-pen"} />
          </Link>
        </div>
        <div className={"tooltip"} data-tip={"Visit"}>
          <Link className={"btn btn-sm btn-ghost"} target={"_blank"} href={props.data.url}>
            <i className={"fa-solid fa-arrow-up-right-from-square"} />
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