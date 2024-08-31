"use server";

import { storage } from "@/lib/integrations/appwrite";
import { renameFile } from "@/lib/utils";
import { ID } from "appwrite";
import { redirect } from "next/navigation";

export async function uploadAction(data: FormData) {
  const bucketId = data.get("bucketId") as string;
  const file = data.get("file") as File;
  const name = data.get("name") as string;

  const newFile = renameFile(file, name, true);

  try {
    await storage.createFile(bucketId, ID.unique(), newFile);
  } catch (err) {
    console.error(err);
    redirect("/admin/error");
  } finally {
    redirect(`/admin/files/${bucketId}`);
  }
}

export async function deleteAction(data: FormData) {
  const bucketId = data.get("bucketId") as string;
  const fileId = data.get("fileId") as string;

  try {
    await storage.deleteFile(bucketId, fileId);
  } catch (err) {
    console.error(err);
    redirect("/admin/error");
  } finally {
    redirect(`/admin/files/${bucketId}`);
  }
}