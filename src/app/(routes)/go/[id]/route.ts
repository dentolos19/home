import { getLink } from "@/lib/data/links";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, props: RouteProps) {
  const id = props.params.id;
  const record = await getLink(id);
  redirect(record?.url ?? "/");
}