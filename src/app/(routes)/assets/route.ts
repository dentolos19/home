import { getLocalAssets } from "@/lib/content";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return redirect("/");
  }
  const assets = await getLocalAssets();
  const asset = assets.find((asset) => asset.id === id);
  redirect(asset?.url || "/");
}