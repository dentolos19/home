import { Client, Storage } from "appwrite";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bd5d5a0011d115a15b");

const storage = new Storage(client);

export function getCloudAssets() {
  return storage.listFiles("66bd5e930023ae85b607");
}