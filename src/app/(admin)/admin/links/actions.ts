"use server";

import { createLink, deleteLink } from "@/lib/data/links";
import { redirect } from "next/navigation";

export async function setLinkAction(data: FormData) {
  const id = data.get("id") as string;
  const url = data.get("url") as string;

  const success = await createLink(id, {
    url,
  });

  if (success) {
    redirect("/admin/links");
  } else {
    redirect("/admin/error");
  }
}

export async function deleteLinkAction(data: FormData) {
  const id = data.get("id") as string;

  const success = await deleteLink(id);

  if (success) {
    redirect("/admin/links");
  } else {
    redirect("/admin/error");
  }
}