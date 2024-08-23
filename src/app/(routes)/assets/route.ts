import { getAsset } from "@/lib/assets";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return redirect("/");
  }
  const asset = await getAsset(id);
  redirect(asset?.url || "/");
}