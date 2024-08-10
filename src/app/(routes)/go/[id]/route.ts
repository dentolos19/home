import { getRedirect } from "@/content";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, props: { params: { id: string } }) {
  const data = await getRedirect(props.params.id);
  redirect(data ?? "/");
}