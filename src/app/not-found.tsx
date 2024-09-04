"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <div className={"card-body items-center"}>
          <h2 className={"card-title"}>Oops!</h2>
          <p>Sorry, the page that you are looking for does not exist.</p>
          <div className={"card-actions"}>
            <button
              className={"btn btn-primary btn-sm"}
              onClick={() => {
                router.back();
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}