import { getLocalAssets } from "@/lib/local";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) redirect("/");

  const assets = getLocalAssets();
  const asset = assets.find((asset) => asset.id === id);

  redirect(asset?.url || "");
}