import { storage } from "@/lib/backend";
import { RouteProps } from "@/types";
import Link from "next/link";

export const revalidate = 0;

export default async function Page(props: RouteProps) {
  const bucketId = props.params.bucketId;
  const bucket = await storage.listFiles(bucketId);
  return (
    <main className={"p-4 flex flex-col gap-2"}>
      <Link className={"w-full btn btn-primary"} href={`/admin/files/${bucketId}/upload`}>
        Upload File
      </Link>
      {bucket?.files.map((file) => (
        <Link className={"w-full btn"} href={`/admin/files/${bucketId}/${file.$id}`}>
          {file.name}
        </Link>
      ))}
    </main>
  );
}