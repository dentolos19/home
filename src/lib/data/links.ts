import { redis } from "@/lib/integrations/redis";

const PARENT_KEY = "go";

export type Link = LinkRecord & {
  id: string;
};

export type LinkRecord = {
  url: string;
};

export async function createLink(id: string, record: LinkRecord) {
  try {
    await redis.set(`links:${id}`, record);
    return true;
  } catch {
    return false;
  }
}

export async function getLink(id: string) {
  try {
    const link = await redis.get<LinkRecord>(`links:${id}`);
    if (!link) return undefined;
    return {
      id,
      ...link,
    } as Link;
  } catch {
    return undefined;
  }
}

export async function getLinks() {
  try {
    const keys = await redis.keys("links:*");
    const links = await redis.mget(keys);
    const records: Link[] = [];
    keys.forEach((key, index) => {
      const id = key.split(":")[1];
      const record = links[index] as LinkRecord;
      records.push({
        id,
        ...record,
      });
    });
    return records;
  } catch {
    return [];
  }
}

export async function deleteLink(id: string) {
  try {
    await redis.del(`links:${id}`);
    return true;
  } catch {
    return false;
  }
}

export async function checkLinkExists(id: string) {
  const exists = await redis.exists(`${PARENT_KEY}:${id}:url`);
  return exists === 1;
}

export function incrementLinkClicks(id: string) {
  return redis.incr(`${PARENT_KEY}:${id}:clicks`).then((clicks) => clicks);
}