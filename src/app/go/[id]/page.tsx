"use client";

import NotFound from "@/app/not-found";
import { useRouter } from "next/navigation";
import { getRedirect } from "@/lib/database";

export default async function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const redirect = await getRedirect(params.id);
  if (!redirect) return <NotFound />;
  setTimeout(() => router.push(redirect.url), 1000);
  return (
    <div className={"h-screen grid place-items-center bg-city-lights bg-center"}>
      <div className={"frame"}>
        <div className={"text-center"}>
          <div className={"text-2xl font-bold"}>Redirecting...</div>
          <div className={"text-gray-900"}>
            If you {"haven't"} been redirected in a second, please{" "}
            <a className={"underline"} href={redirect.url}>
              click here
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}