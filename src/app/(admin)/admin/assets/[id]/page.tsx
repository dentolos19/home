import { deleteAssetAction } from "@/app/(admin)/admin/assets/actions";
import NotFoundBoundary from "@/app/not-found";
import FormContainer from "@/components/ui/form-container";
import FormControl from "@/components/ui/form-control";
import { getAsset } from "@/lib/data/assets";
import { RouteProps } from "@/types";

export const revalidate = 0;

export default async function Page(props: RouteProps) {
  const id = props.params.id;
  const record = await getAsset(id);

  if (!record) return <NotFoundBoundary />;

  return (
    <main className={"grid place-items-center"}>
      <FormContainer title={"Edit Asset"} actions={[{ label: "Delete", color: "error", action: deleteAssetAction }]}>
        <FormControl label={"ID"}>
          <input className={"input"} type={"text"} name={"id"} defaultValue={record.id} readOnly />
        </FormControl>
        <FormControl label={"Bucket ID"}>
          <input className={"input"} type={"text"} name={"bucketId"} defaultValue={record.bucketId} readOnly />
        </FormControl>
        <FormControl label={"File ID"}>
          <input className={"input"} type={"text"} name={"fileId"} defaultValue={record.fileId} readOnly />
        </FormControl>
        <div className={"form-control"}>
          <label className={"label cursor-pointer"}>
            <span className={"label-text"}>Is Downloadable</span>
            <input className={"checkbox"} type={"checkbox"} name={"download"} checked={record.download} />
          </label>
        </div>
      </FormContainer>
    </main>
  );
}