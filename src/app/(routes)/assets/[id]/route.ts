import { getAsset } from "@/lib/data/assets";
import { storage } from "@/lib/integrations/appwrite";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, props: RouteProps) {
  const id = props.params.id;

  const record = await getAsset(id);
  if (!record) redirect("/");

  let url: string = storage.getFilePreview(record.bucketId, record.fileId);
  if (record.download) url = storage.getFileDownload(record.bucketId, record.fileId);

  redirect(url);
}