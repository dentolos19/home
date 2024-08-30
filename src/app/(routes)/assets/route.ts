import { getAsset } from "@/lib/data/assets";
import { storage } from "@/lib/integrations/appwrite";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) redirect("/");

  const record = await getAsset(id);
  if (!record) redirect("/");

  const previewUrl = storage.getFilePreview(record.bucketId, record.fileId);
  redirect(previewUrl);
}