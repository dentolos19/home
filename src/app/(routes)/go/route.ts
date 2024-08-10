import { getRedirect } from "@/content";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return redirect("/");
  }
  const url = await getRedirect(id);
  redirect(url ?? "/");
}