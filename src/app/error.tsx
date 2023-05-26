"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className={"h-screen grid place-items-center bg-green-forest bg-center"}>
      <div className={"frame"}>
        <div className={"text-center"}>
          <a className={"text-2xl font-bold"}>Error</a>
          <div className={"text-gray-900"}>{error.message}</div>
          <button className={"button mt-2"}>Reset</button>
        </div>
      </div>
    </div>
  );
}