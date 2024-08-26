import Link from "next/link";

export default function FileItem(props: {
  data: {
    name: string;
    size: string;
    bucketId: string;
    fileId: string;
    downloadUrl: string;
    previewUrl?: string;
  };
}) {
  return (
    <div className={"h-16 sm:h-24 flex rounded-box bg-base-300"}>
      <img className={"w-16 sm:w-24 rounded-l-box"} src={props.data.previewUrl || "/assets/file.png"} alt={"Preview"} />
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
          <Link className={"btn btn-sm btn-ghost"} target={"_blank"} href={props.data.downloadUrl}>
            <i className={"fa-solid fa-download"} />
          </Link>
        </div>
        {props.data.previewUrl && (
          <div className={"tooltip"} data-tip={"Preview"}>
            <Link className={"btn btn-sm btn-ghost"} target={"_blank"} href={props.data.previewUrl}>
              <i className={"fa-solid fa-magnifying-glass"} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}