import { storage } from "@/lib/integrations/appwrite";
import Link from "next/link";

type FileItemProps = {
  data: {
    name: string;
    size: string;
    bucketId: string;
    fileId: string;
  };
};

export default function FileItem(props: FileItemProps) {
  const previewUrl = storage.getFilePreview(props.data.bucketId, props.data.fileId);
  const downscaledPreviewUrl = storage.getFilePreview(props.data.bucketId, props.data.fileId, 100, 100);
  const downloadUrl = storage.getFileDownload(props.data.bucketId, props.data.fileId);

  return (
    <div className={"h-16 sm:h-24 flex rounded-box bg-base-300"}>
      <img className={"w-16 sm:w-24 object-cover rounded-l-box"} src={downscaledPreviewUrl} alt={"Preview"} />
      <div className={"pl-4 min-w-0 flex-1 flex flex-col justify-center"}>
        <h2 className={"text-lg font-bold truncate"}>{props.data.name}</h2>
        <p className={"text-sm text-gray-400 truncate"}>{props.data.size}</p>
      </div>
      <div className={"pr-4 flex items-center"}>
        <div className={"tooltip"} data-tip={"Edit"}>
          <Link className={"btn btn-sm btn-ghost"} href={`/admin/files/${props.data.bucketId}/${props.data.fileId}`}>
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