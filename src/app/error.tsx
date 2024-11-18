"use client";

import { ErrorRouteProps } from "@/types";
import { useEffect } from "react";

export default function ErrorPage(props: ErrorRouteProps) {
  useEffect(() => {
    console.error(props.error);
  }, [props.error]);

  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <div className={"card-body items-center text-center"}>
          <div className={"card-title"}>Oops!</div>
          <div>Something went wrong in the code, sorry about that.</div>
          <div className={"card-actions"}>
            <button className={"btn btn-primary btn-sm"} onClick={props.reset}>
              Reload
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}