import FileItem from "@/app/(admin)/_components/file-item";
import NotFoundBoundary from "@/app/not-found";
import { storage } from "@/lib/integrations/appwrite";
import { RouteProps } from "@/types";
import Link from "next/link";

export const revalidate = 0;

export default async function Page(props: RouteProps) {
  const bucketId = props.params.bucketId;
  const bucket = await storage.listFiles(bucketId).catch(() => undefined);

  if (!bucket) return <NotFoundBoundary />;

  return (
    <main className={"space-y-2 p-4"}>
      <Link className={"btn btn-primary w-full"} href={`/admin/files/${bucketId}/upload`}>
        Upload File
      </Link>
      {bucket.files.map((file) => (
        <FileItem key={file.$id} data={file} />
      ))}
    </main>
  );
}