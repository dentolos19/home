import { APPWRITE_KEY, UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } from "@/environment";
import { Redis } from "@upstash/redis";
import { Client, Databases, Storage } from "appwrite";

export const appwrite = new Client();
appwrite.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bd5d5a0011d115a15b");
appwrite.headers["X-Appwrite-Key"] = APPWRITE_KEY;

export const databases = new Databases(appwrite);
export const storage = new Storage(appwrite);

export const redis = new Redis({
  url: UPSTASH_REDIS_REST_URL,
  token: UPSTASH_REDIS_REST_TOKEN,
});

export const buckets = [
  {
    id: "66bd5e930023ae85b607",
    name: "Media",
  },
];