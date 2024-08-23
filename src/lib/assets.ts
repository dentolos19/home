import { redis } from "@/lib/backend";

export type AssetFile = AssetFileRecord & {
  id: string;
};

export type AssetFileRecord = {
  type: "file" | "media";
  bucketId?: string;
  fileId?: string;
  url?: string;
};

export async function getAsset(id: string) {
  try {
    const link = await redis.get<AssetFileRecord>(`assets:${id}`);
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

export async function getAssets() {
  try {
    const keys = await redis.keys("assets:*");
    const links = await redis.mget(keys);
    const records: AssetFile[] = [];
    keys.forEach((key, index) => {
      const id = key.split(":")[1];
      const record = links[index] as AssetFileRecord;
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

export async function setAsset(id: string, record: AssetFileRecord) {
  try {
    await redis.set(`assets:${id}`, record);
    return true;
  } catch (error) {
    return false;
  }
}

export async function deleteAsset(id: string) {
  try {
    await redis.del(`assets:${id}`);
    return true;
  } catch (error) {
    return false;
  }
}