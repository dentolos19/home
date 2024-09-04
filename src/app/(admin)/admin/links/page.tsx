import LinkItem from "@/app/(admin)/_components/link-item";
import { getLinks } from "@/lib/data/links";
import Link from "next/link";

export const revalidate = 0;

export default async function Page() {
  const links = await getLinks();
  return (
    <main className={"space-y-2 p-4"}>
      <Link className={"btn btn-primary w-full"} href={"/admin/links/add"}>
        Add Link
      </Link>
      {links.map((link) => (
        <LinkItem key={link.id} data={link} />
      ))}
    </main>
  );
}