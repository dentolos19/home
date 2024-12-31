import { getLocalAssets } from "@/lib/local";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(_: NextRequest, props: RouteProps) {
  const { id } = await props.searchParams;
  if (!id) redirect("/");

  const assets = getLocalAssets();
  const asset = assets.find((asset) => asset.id === id);

  redirect(asset?.url || "/");
}