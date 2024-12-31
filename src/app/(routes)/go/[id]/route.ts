import { getLink, incrementLinkClicks } from "@/lib/data/links";
import { RouteProps } from "@/types";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(_: NextRequest, props: RouteProps) {
  const { id } = await props.params;

  try {
    const link = await getLink(id);
    await incrementLinkClicks(id);
    redirect(link.url);
  } catch (error) {
    console.error(error);
    redirect("/");
  }
}