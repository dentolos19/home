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
    <div className={"h-16 sm:h-24 flex rounded-box bg-base-300"}>
      <img className={"w-16 sm:w-24 object-cover rounded-l-box"} src={downscaledPreviewUrl} alt={"Preview"} />
      <div className={"pl-4 min-w-0 flex-1 flex flex-col justify-center"}>
        <h2 className={"text-lg font-bold truncate"}>{props.data.name}</h2>
        <p className={"text-sm text-gray-400 truncate"}>{sizeText}</p>
      </div>
      <div className={"pr-4 flex items-center"}>
        <div className={"tooltip"} data-tip={"Edit"}>
          <Link className={"btn btn-sm btn-ghost"} href={`/admin/files/${props.data.bucketId}/${props.data.$id}`}>
            <i className={"fa-solid fa-pen"} />
          </Link>
        </div>
        <div className={"tooltip"} data-tip={"Download"}>
          <Link className={"btn btn-sm btn-ghost"} target={"_blank"} href={downloadUrl}>
            <i className={"fa-solid fa-download"} />
          </Link>
        </div>
        <div className={"tooltip"} data-tip={"Preview"}>
          <Link className={"btn btn-sm btn-ghost"} target={"_blank"} href={previewUrl}>
            <i className={"fa-solid fa-magnifying-glass"} />
          </Link>
        </div>
      </div>
    </div>
  );
}