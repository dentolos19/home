import { getLocalAssets } from "@/lib/local";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, props: RouteProps) {
  const id = (await props.params).id;

  const assets = getLocalAssets();
  const asset = assets.find((asset) => asset.id === id);

  redirect(asset?.url || "/");
}