import { redis } from "@/lib/integrations/redis";

export type MyAsset = MyAssetRecord & { id: string };
export type MyAssetRecord = {
  bucketId: string;
  fileId: string;
  download?: boolean;
};

export async function getAsset(id: string) {
  try {
    const asset = await redis.get<MyAssetRecord>(`assets:${id}`);
    if (!asset) return undefined;
    return {
      id,
      ...asset,
    } as MyAsset;
  } catch (error) {
    return undefined;
  }
}

export async function getAssets() {
  try {
    const keys = await redis.keys("assets:*");
    const assets = await redis.mget(keys);
    const records: MyAsset[] = [];
    keys.forEach((key, index) => {
      const id = key.split(":")[1];
      const record = assets[index] as MyAssetRecord;
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

export async function setAsset(id: string, record: MyAssetRecord) {
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