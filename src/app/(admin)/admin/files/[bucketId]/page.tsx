import NotFound from "@/app/not-found";
import { storage } from "@/lib/backend";
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
    <main className={"p-4 flex flex-col gap-2"}>
      <Link className={"w-full btn btn-primary"} href={`/admin/files/${bucketId}/upload`}>
        Upload File
      </Link>
      {files.map((file) => (
        <div key={file.$id} className={"h-16 sm:h-24 flex rounded-box bg-base-300"}>
          <img className={"w-16 sm:w-24 rounded-l-box"} src={file.previewUrl} alt={"Preview"} />
          <div className={"pl-4 min-w-0 flex-1 flex flex-col justify-center"}>
            <h2 className={"text-lg font-bold truncate"}>{file.name}</h2>
            <p className={"text-sm text-gray-400 truncate"}>{file.sizeText}</p>
          </div>
          <div className={"pr-4 flex items-center"}>
            <div className={"tooltip"} data-tip={"Edit"}>
              <Link className={"btn btn-sm btn-ghost"} href={`/admin/files/${bucketId}/${file.$id}`}>
                <i className={"fa-solid fa-pen"} />
              </Link>
            </div>
            <div className={"tooltip"} data-tip={"Download"}>
              <Link className={"btn btn-sm btn-ghost"} target={"_blank"} href={file.downloadUrl}>
                <i className={"fa-solid fa-download"} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}