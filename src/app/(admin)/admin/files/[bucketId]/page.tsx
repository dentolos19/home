import FileItem from "@/app/(admin)/_components/file-item";
import NotFound from "@/app/not-found";
import { storage } from "@/lib/integrations/appwrite";
import { RouteProps } from "@/types";
import Link from "next/link";

export const revalidate = 0;

export default async function Page(props: RouteProps) {
  const bucketId = props.params.bucketId;
  const bucket = await storage.listFiles(bucketId).catch(() => undefined);

  if (!bucket) {
    return <NotFound />;
  }

  const files = bucket.files.map((file) => {
    const sizeKb = file.sizeOriginal / 1024;
    const sizeMb = sizeKb / 1024;
    let sizeText = sizeKb.toFixed(2) + " KB";
    if (sizeMb > 1) {
      sizeText = sizeMb.toFixed(2) + " MB";
    }
    const previewUrl = storage.getFilePreview(bucketId, file.$id);
    const downloadUrl = storage.getFileDownload(bucketId, file.$id);
    return {
      ...file,
      sizeText,
      previewUrl: previewUrl.href,
      downloadUrl: downloadUrl.href,
    };
  });

  return (
    <main className={"p-4 space-y-2"}>
      <Link className={"w-full btn btn-primary"} href={`/admin/files/${bucketId}/upload`}>
        Upload File
      </Link>
      {files.map((file) => (
        <FileItem
          key={file.$id}
          data={{
            name: file.name,
            size: file.sizeText,
            bucketId,
            fileId: file.$id,
            downloadUrl: file.downloadUrl,
            previewUrl: file.previewUrl,
          }}
        />
      ))}
    </main>
  );
}