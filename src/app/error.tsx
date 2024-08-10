"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <div className={"card-body items-center text-center"}>
          <h2 className={"card-title"}>Oops!</h2>
          <p>Something went wrong in the code, sorry about that!</p>
          <div className={"card-actions"}>
            <button className={"btn btn-sm btn-primary"} onClick={reset}>
              Reload
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}