import { getAsset } from "@/content";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return redirect("/");
  }
  const asset = getAsset(id);
  redirect(asset?.url || "/");
}