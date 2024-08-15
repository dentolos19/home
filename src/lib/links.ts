import { UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } from "@/environment";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: UPSTASH_REDIS_REST_URL,
  token: UPSTASH_REDIS_REST_TOKEN,
});

export type GoLink = GoLinkRecord & {
  id: string;
};

export type GoLinkRecord = {
  url: string;
};

export async function getLink(id: string) {
  try {
    const link = await redis.get<GoLinkRecord>(`links:${id}`);
    if (!link) {
      return undefined;
    }
    return {
      id,
      ...link,
    };
  } catch (error) {
    return undefined;
  }
}

export async function getLinks() {
  try {
    const keys = await redis.keys("links:*");
    const links = await redis.mget(keys);
    const records: GoLink[] = [];
    keys.forEach((key, index) => {
      const id = key.split(":")[1];
      const record = links[index] as GoLinkRecord;
      records.push({
        id,
        ...record,
      });
    });
    return records;
  } catch (error) {
    return [];
  }
}

export async function setLink(id: string, record: GoLinkRecord) {
  try {
    await redis.set(`links:${id}`, record);
    return true;
  } catch (error) {
    return false;
  }
}

export async function deleteLink(id: string) {
  try {
    await redis.del(`links:${id}`);
    return true;
  } catch (error) {
    return false;
  }
}