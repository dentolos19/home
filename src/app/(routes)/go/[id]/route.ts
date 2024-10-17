import { getLink } from "@/lib/data/links";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, props: RouteProps) {
  const id = (await props.params).id;

  const record = await getLink(id);
  if (!record) redirect("/");

  redirect(record.url);
}