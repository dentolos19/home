"use client";

import { LinkInfo } from "@/lib/data/schema";
import Link from "next/link";

type LinkItemProps = {
  data: LinkInfo;
};

export default function LinkItem(props: LinkItemProps) {
  const onCopy = () => {
    navigator.clipboard.writeText(`https://dennise.me/go/${props.data.id}`);
  };

  return (
    <div key={props.data.id} className={"flex rounded-box bg-base-300 p-4 max-md:flex-col max-md:gap-1"}>
      <div className={"flex min-w-0 flex-1 flex-col justify-center"}>
        <div className={"truncate text-lg font-medium"}>{props.data.id}</div>
        <Link className={"truncate text-sm text-secondary"} target={"_blank"} href={props.data.url}>
          {props.data.url}
        </Link>
      </div>
      <div className={"flex items-center"}>
        <div className={"tooltip"} data-tip={"Copy"}>
          <button className={"btn btn-ghost btn-sm"} onClick={onCopy}>
            <i className={"fa-solid fa-copy"} />
          </button>
        </div>
        <div className={"tooltip"} data-tip={"Manage"}>
          <Link className={"btn btn-ghost btn-sm"} href={`/admin/links/${props.data.id}`}>
            <i className={"fa-solid fa-gear"} />
          </Link>
        </div>
        <div className={"tooltip"} data-tip={"Delete"}>
          <Link className={"btn btn-ghost btn-sm"} href={`/admin/links/${props.data.id}/delete`}>
            <i className={"fa-solid fa-trash"} />
          </Link>
        </div>
      </div>
    </div>
  );
}