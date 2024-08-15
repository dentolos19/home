import { getLinks } from "@/lib/links";
import Link from "next/link";

export const revalidate = 0;

export default async function Page() {
  const links = await getLinks();
  return (
    <main className={"p-4 flex flex-col gap-2"}>
      <Link className={"w-full btn btn-primary"} href={"/admin/links/add"}>
        Add Link
      </Link>
      {links.map((link) => (
        <div className={"p-6 grid grid-cols-[1fr,auto] rounded-box transition bg-base-300 hover:bg-base-200"}>
          <div className={"space-y-1"}>
            <h2 className={"card-title"}>{link.id}</h2>
            <p className={"text-xs text-gray-400"}>{link.url}</p>
          </div>
          <div className={"flex items-center"}>
            <div className={"tooltip"} data-tip={"Edit"}>
              <Link className={"btn btn-sm btn-ghost"} href={`/admin/links/${link.id}`}>
                <i className={"fa-solid fa-pen"} />
              </Link>
            </div>
            <div className={"tooltip"} data-tip={"Visit"}>
              <Link className={"btn btn-sm btn-ghost"} target={"_blank"} href={link.url}>
                <i className={"fa-solid fa-arrow-up-right-from-square"} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}