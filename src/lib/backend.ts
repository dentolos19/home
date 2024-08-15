import { APPWRITE_API_KEY } from "@/environment";
import { Client, Databases, Storage } from "appwrite";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bd5d5a0011d115a15b");
client.headers["X-Appwrite-Key"] = APPWRITE_API_KEY;

export const databases = new Databases(client);
export const storage = new Storage(client);

export const assetBucketId = "66bd5e930023ae85b607";