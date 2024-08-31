"use server";

import { deleteLink, setLink } from "@/lib/data/links";
import { redirect } from "next/navigation";

export async function setAction(data: FormData) {
  const id = data.get("id") as string;
  const url = data.get("url") as string;

  const success = await setLink(id, {
    url,
  });

  if (success) {
    redirect("/admin/links");
  } else {
    redirect("/admin/error");
  }
}

export async function deleteAction(data: FormData) {
  const id = data.get("id") as string;

  const success = await deleteLink(id);

  if (success) {
    redirect("/admin/links");
  } else {
    redirect("/admin/error");
  }
}