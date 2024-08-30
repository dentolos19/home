import { getAsset } from "@/lib/data/assets";
import { storage } from "@/lib/integrations/appwrite";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, props: RouteProps) {
  const id = props.params.id;

  const record = await getAsset(id);
  if (!record) redirect("/");

  const previewUrl = storage.getFilePreview(record.bucketId, record.fileId);
  redirect(previewUrl);
}