"use client";

import clsx from "clsx";
import Link from "next/link";

export default function EventItem(props: {
  data: {
    id: string;
    name: string;
    date: string;
    status: string;
    private: boolean;
    role: string;
    description: string;
    src: string;
    href: string;
  };
}) {
  const handleClick = () => {
    const dialog = document.getElementById(props.data.id) as HTMLDialogElement;
    dialog.showModal();
  };

  return (
    <>
      <button
        className={"card cursor-pointer bg-base-300 text-left transition hover:bg-base-200"}
        type={"button"}
        onClick={handleClick}
      >
        <figure>
          <img className={"aspect-video object-cover"} src={props.data.src || "/assets/placeholder"} alt={"Preview"} />
        </figure>
        <div className={"card-body"}>
          <h2 className={"card-title"}>
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
          </h2>
          <p>{props.data.date}</p>
          <div className={"card-actions"}>
            <div className={"badge badge-outline"}>{props.data.role}</div>
          </div>
        </div>
      </button>
      <dialog id={props.data.id} className={"modal"}>
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