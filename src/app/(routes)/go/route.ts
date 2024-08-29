import { getLink } from "@/lib/data/links";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return redirect("/");
  }
  const record = await getLink(id);
  redirect(record?.url ?? "/");
}