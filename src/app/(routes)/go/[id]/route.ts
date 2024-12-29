import { getLink, incrementLinkClicks } from "@/lib/data/links";
import { RouteProps } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, props: RouteProps) {
  const { id } = await props.params;

  try {
    const link = await getLink(id);
    await incrementLinkClicks(id);
    return NextResponse.redirect(link.url);
  } catch (error) {
    console.error(error);
    return NextResponse.redirect("/");
  }
}