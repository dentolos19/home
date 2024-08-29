import { getAsset } from "@/lib/data/assets";
import { storage } from "@/lib/integrations/appwrite";
import { getLocalAssets } from "@/lib/local";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) redirect("/");

  const assets = getLocalAssets();
  const asset = assets.find((asset) => asset.id === id);

  if (!asset) {
    const record = await getAsset(id);
    if (!record) redirect("/");
    redirect(storage.getFilePreview(record?.bucketId, record?.fileId).href);
  }

  redirect(asset?.url || "/");
}