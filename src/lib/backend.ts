import { APPWRITE_API_KEY } from "@/environment";
import { Client, ID, Storage } from "appwrite";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bd5d5a0011d115a15b");
client.headers["X-Appwrite-Key"] = APPWRITE_API_KEY;

const storage = new Storage(client);

export function getAssetBucket() {
  try {
    return storage.listFiles("66bd5e930023ae85b607");
  } catch {
    return undefined;
  }
}

export function downloadAssetFile(id: string) {
  try {
    return storage.getFileDownload("66bd5e930023ae85b607", id);
  } catch {
    return undefined;
  }
}

export function uploadAssetFile(file: File) {
  try {
    storage.createFile("66bd5e930023ae85b607", ID.unique(), file);
    return true;
  } catch {
    return false;
  }
}

export function getAssetFile(id: string) {
  try {
    return storage.getFile("66bd5e930023ae85b607", id);
  } catch {
    return undefined;
  }
}

export function deleteAssetFile(id: string) {
  try {
    storage.deleteFile("66bd5e930023ae85b607", id);
    return true;
  } catch {
    return false;
  }
}