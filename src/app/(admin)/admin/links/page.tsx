import { getLinks } from "@/lib/links";
import Link from "next/link";

export const revalidate = 0;

export default async function Page() {
  const links = await getLinks();
  return (
    <main className={"p-4 space-y-2"}>
      <Link className={"w-full btn btn-primary"} href={"/admin/links/add"}>
        Add Link
      </Link>
      {links.map((link) => (
        <Link className={"w-full btn"} href={`/admin/links/${link.id}`}>
          {link.id}
        </Link>
      ))}
    </main>
  );
}