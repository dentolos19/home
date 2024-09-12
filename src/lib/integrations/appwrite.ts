import { Account, Client, Databases, Storage } from "appwrite";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bd5d5a0011d115a15b");
// client.headers["X-Appwrite-Key"] = APPWRITE_KEY;

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const databaseIds = {
  main: {
    id: "66d7a9cb00008748b18e",
    label: "Main",
    collections: {},
  },
};

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