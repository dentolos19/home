import { redis } from "@/lib/integrations/redis";

export type Link = LinkRecord & {
  id: string;
};

export type LinkRecord = {
  url: string;
};

export async function getLink(id: string) {
  try {
    const link = await redis.get<LinkRecord>(`links:${id}`);
    if (!link) return undefined;
    return {
      id,
      ...link,
    } as Link;
  } catch (error) {
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
  } catch (error) {
    return [];
  }
}

export async function setLink(id: string, record: LinkRecord) {
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