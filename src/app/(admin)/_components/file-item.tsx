import { storage } from "@/lib/integrations/appwrite";
import { Models } from "appwrite";
import Link from "next/link";

type FileItemProps = {
  data: Models.File;
};

export default function FileItem(props: FileItemProps) {
  const previewUrl = storage.getFilePreview(props.data.bucketId, props.data.$id);
  const downscaledPreviewUrl = storage.getFilePreview(props.data.bucketId, props.data.$id, 100, 100);
  const downloadUrl = storage.getFileDownload(props.data.bucketId, props.data.$id);

  const sizeKb = props.data.sizeOriginal / 1024;
  const sizeMb = sizeKb / 1024;
  let sizeText = sizeKb.toFixed(2) + " KB";
  if (sizeMb > 1) {
    sizeText = sizeMb.toFixed(2) + " MB";
  }

  return (
    <div className={"flex h-16 rounded-box bg-base-300 sm:h-24"}>
      <img className={"w-16 rounded-l-box object-cover sm:w-24"} src={downscaledPreviewUrl} alt={"Preview"} />
      <div className={"flex min-w-0 flex-1 flex-col justify-center pl-4"}>
        <h2 className={"truncate text-lg font-bold"}>{props.data.name}</h2>
        <p className={"truncate text-sm text-gray-400"}>{sizeText}</p>
      </div>
      <div className={"flex items-center pr-4"}>
        <div className={"tooltip"} data-tip={"Edit"}>
          <Link className={"btn btn-ghost btn-sm"} href={`/admin/files/${props.data.bucketId}/${props.data.$id}`}>
            <i className={"fa-solid fa-pen"} />
          </Link>
        </div>
        <div className={"tooltip"} data-tip={"Download"}>
          <Link className={"btn btn-ghost btn-sm"} target={"_blank"} href={downloadUrl}>
            <i className={"fa-solid fa-download"} />
          </Link>
        </div>
        <div className={"tooltip"} data-tip={"Preview"}>
          <Link className={"btn btn-ghost btn-sm"} target={"_blank"} href={previewUrl}>
            <i className={"fa-solid fa-magnifying-glass"} />
          </Link>
        </div>
      </div>
    </div>
  );
}