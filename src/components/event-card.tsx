"use client";

import { hashStrings } from "@/utils";
import clsx from "clsx";

export default function EventCard(props: {
  name: string;
  date: string;
  status: string;
  role: string;
  description: string;
  src: string;
  href: string;
}) {
  const modalId = hashStrings(props.name, props.date);

  const handleClick = () => {
    const dialog = document.getElementById(modalId) as HTMLDialogElement;
    dialog.showModal();
  };

  return (
    <>
      <button
        className={"card text-left cursor-pointer bg-base-100 hover:bg-base-200"}
        type={"button"}
        onClick={handleClick}
      >
        <figure>
          <img src={props.src || "/assets/nyp.jpg"} alt={"Preview"} />
        </figure>
        <div className={"card-body"}>
          <h2 className={"card-title"}>
            {props.name}
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
      <dialog id={modalId} className={"modal"}>
        <div className={"modal-box"}>
          <form method={"dialog"}>
            <button className={"btn btn-sm btn-circle btn-ghost absolute right-4 top-4"} type={"submit"}>
              <i className={"fa-solid fa-x"} />
            </button>
          </form>
          <div className={"text-xl font-bold"}>{props.name}</div>
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
          <div className={"my-4"}>{props.description || "Nothing to read here."}</div>
        </div>
      </dialog>
    </>
  );
}