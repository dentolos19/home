import LinkItem from "@/app/(admin)/_components/link-item";
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
        <LinkItem key={link.id} data={link} />
      ))}
    </main>
  );
}