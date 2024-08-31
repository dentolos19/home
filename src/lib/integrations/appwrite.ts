import { APPWRITE_KEY } from "@/environment";
import { Client, Storage } from "appwrite";

export const appwrite = new Client();
appwrite.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bd5d5a0011d115a15b");
appwrite.headers["X-Appwrite-Key"] = APPWRITE_KEY;

export const storage = new Storage(appwrite);
export const storageIds = {
  media: {
    id: "media",
    label: "Media",
  },
  downloadable: {
    id: "66d1e57300147b191dd2",
    label: "Downloadable",
  },
};