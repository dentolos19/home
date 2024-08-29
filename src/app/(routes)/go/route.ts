import { getLink } from "@/lib/data/links";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) redirect("/");

  const record = await getLink(id);
  redirect(record?.url ?? "/");
}