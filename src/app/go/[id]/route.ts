import { getRedirect } from "@/content";
import { redirect } from "next/navigation";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const data = await getRedirect(params.id);
  redirect(data ?? "/");
}