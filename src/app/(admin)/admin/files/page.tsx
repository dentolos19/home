import { getAssetBucket } from "@/lib/backend";
import Link from "next/link";

export default async function Page() {
  const bucket = await getAssetBucket();
  return (
    <main className={"p-4 space-y-2"}>
      <Link className={"w-full btn btn-primary"} href={"/admin/files/upload"}>
        Upload File
      </Link>
      {bucket.files.map((file) => (
        <Link className={"w-full btn"} href={`/admin/files/${file.$id}`}>
          {file.name}
        </Link>
      ))}
    </main>
  );
}