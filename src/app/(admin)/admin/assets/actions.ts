"use server";

import { deleteAsset, setAsset } from "@/lib/data/assets";
import { redirect } from "next/navigation";

export async function setAssetAction(data: FormData) {
  const id = data.get("id") as string;
  const bucketId = data.get("bucketId") as string | undefined;
  const fileId = data.get("fileId") as string | undefined;
  const download = data.get("download") === "on";

  if (!bucketId || !fileId) return;

  const success = await setAsset(id, {
    bucketId,
    fileId,
    download,
  });

  if (success) {
    redirect("/admin/assets");
  } else {
    redirect("/admin/error");
  }
}

export async function deleteAssetAction(data: FormData) {
  const id = data.get("id") as string;
  const success = await deleteAsset(id);

  if (success) {
    redirect("/admin/assets");
  } else {
    redirect("/admin/error");
  }
}