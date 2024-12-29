import LinkItem from "@/app/(admin)/admin/links/_components/link-item";
import { getAllLinks } from "@/lib/data/links";
import Link from "next/link";

export default async function Page() {
  const links = await getAllLinks();
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