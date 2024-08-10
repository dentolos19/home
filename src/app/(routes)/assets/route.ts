import data from "@/data/assets.json";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const url = new URL(request.nextUrl);
  const id = url.searchParams.get("id");
  if (id) {
    const asset = data.find((asset) => asset.id === id);
    if (asset) {
      redirect(asset.url);
    }
  }
  redirect("/");
}