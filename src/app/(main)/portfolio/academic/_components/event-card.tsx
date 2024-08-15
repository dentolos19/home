"use client";

import clsx from "clsx";
import Link from "next/link";

export default function EventCard(props: {
  id: string;
  name: string;
  date: string;
  status: string;
  private: boolean;
  role: string;
  description: string;
  src: string;
  href: string;
}) {
  const handleClick = () => {
    const dialog = document.getElementById(props.id) as HTMLDialogElement;
    dialog.showModal();
  };

  return (
    <>
      <button
        className={"card text-left cursor-pointer transition bg-base-100 hover:bg-base-200"}
        type={"button"}
        onClick={handleClick}
      >
        <figure>
          <img className={"aspect-video object-cover"} src={props.src || "/assets?id=placeholder"} alt={"Preview"} />
        </figure>
        <div className={"card-body"}>
          <h2 className={"card-title"}>
            {props.private ? "[Redacted]" : props.name}
            <div
              className={clsx(
                "badge",
                props.status === "Upcoming" && "badge-success",
                props.status === "Ongoing" && "badge-primary",
                props.status === "Ended" && "badge-error"
              )}
            >
              {props.status}
            </div>
          </h2>
          <p>{props.date}</p>
          <div className={"card-actions"}>
            <div className={"badge badge-outline"}>{props.role}</div>
          </div>
        </div>
      </button>
      <dialog id={props.id} className={"modal"}>
        <div className={"modal-box"}>
          <form method={"dialog"}>
            <button className={"btn btn-sm btn-circle btn-ghost absolute right-4 top-4"} type={"submit"}>
              <i className={"fa-solid fa-x"} />
            </button>
          </form>
          <div className={"text-xl font-bold"}>{props.private ? "[Redacted]" : props.name}</div>
          <div className={"space-x-1"}>
            <div
              className={clsx(
                "badge",
                props.status === "Upcoming" && "badge-success",
                props.status === "Ongoing" && "badge-primary",
                props.status === "Ended" && "badge-error"
              )}
            >
              {props.status}
            </div>
            <div className={"badge badge-outline"}>{props.role}</div>
          </div>
          <div className={"mt-4"}>{props.description || "Nothing to read here."}</div>
          {props.href && (
            <Link className={"mt-2 btn btn-sm btn-info"} href={props.href}>
              <i className={"fa-solid fa-arrow-up-right-from-square"} />
              Read More
            </Link>
          )}
        </div>
      </dialog>
    </>
  );
}