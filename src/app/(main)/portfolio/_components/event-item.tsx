"use client";

import { hashString } from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";

type EventItemProps = {
  data: {
    date: string;
    name: string;
    status: string;
    private: boolean;
    role: string;
    description: string;
    src: string;
    href: string;
  };
};

export default function EventItem(props: EventItemProps) {
  const id = hashString(props.data.name);

  const handleClick = () => {
    const dialog = document.getElementById(id) as HTMLDialogElement;
    dialog.showModal();
  };

  return (
    <>
      <button
        className={"card cursor-pointer bg-base-300 text-left transition hover:bg-base-200"}
        onClick={handleClick}
      >
        <figure>
          <img
            className={"aspect-video object-cover"}
            src={props.data.src || "/assets/placeholder.png"}
            alt={"Preview"}
          />
        </figure>
        <div className={"card-body"}>
          <div className={"card-title"}>
            {props.data.private ? "[Redacted]" : props.data.name}
            <div
              className={clsx(
                "badge",
                props.data.status === "Upcoming" && "badge-success",
                props.data.status === "Ongoing" && "badge-primary",
                props.data.status === "Ended" && "badge-error",
              )}
            >
              {props.data.status}
            </div>
          </div>
          <div>{props.data.date}</div>
          <div className={"card-actions"}>
            <div className={"badge badge-outline"}>{props.data.role}</div>
          </div>
        </div>
      </button>
      <dialog id={id} className={"modal"}>
        <div className={"modal-box"}>
          <form method={"dialog"}>
            <button className={"btn btn-circle btn-ghost btn-sm absolute right-4 top-4"} type={"submit"}>
              <i className={"fa-solid fa-x"} />
            </button>
          </form>
          <div className={"text-xl font-bold"}>{props.data.private ? "[Redacted]" : props.data.name}</div>
          <div className={"space-x-1"}>
            <div
              className={clsx(
                "badge",
                props.data.status === "Upcoming" && "badge-success",
                props.data.status === "Ongoing" && "badge-primary",
                props.data.status === "Ended" && "badge-error",
              )}
            >
              {props.data.status}
            </div>
            <div className={"badge badge-outline"}>{props.data.role}</div>
          </div>
          <div className={"mt-4"}>{props.data.description || "Nothing to read here."}</div>
          {props.data.href && (
            <Link className={"btn btn-info btn-sm mt-2"} href={props.data.href}>
              <i className={"fa-arrow-up-right-from-square fa-solid"} />
              Read More
            </Link>
          )}
        </div>
      </dialog>
    </>
  );
}