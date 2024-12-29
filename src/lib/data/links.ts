"use server";

import { linkSchema } from "@/lib/data/schema";
import { redis } from "@/lib/integrations/redis";

const PARENT_KEY = "go";

export async function createLink(id: string, url: string) {
  // Check if link exists in cache
  const exists = await checkLinkExists(id);
  if (exists) throw new Error("Link already exists.");

  // Store link information in cache
  const success = await redis
    .mset({
      [`${PARENT_KEY}:${id}:url`]: url,
      [`${PARENT_KEY}:${id}:clicks`]: 0,
    })
    .then((res) => res === "OK");

  if (!success) throw new Error("Failed to set link in cache.");

  return linkSchema.parse({
    id,
    url,
    clicks: 0,
  });
}

export async function getLink(id: string) {
  // Check if link exists in cache
  const exists = await checkLinkExists(id);
  if (!exists) throw new Error("Link does not exist.");

  // Get all fields of schema except ID
  const fields = Object.keys(linkSchema.shape).filter((key) => key !== "id");

  // Get values of all fields from cache
  const values = await redis.mget<string[]>(fields.map((field) => `${PARENT_KEY}:${id}:${field}`));
  if (!values) throw new Error("Failed to get link in cache.");

  // // Check if all fields have values
  // if (values.some((value) => value === null)) throw new Error("Failed to get link fields from cache.");

  // Map values to fields
  const link: Record<string, string> = { id };
  fields.forEach((field, index) => {
    link[field] = values[index];
  });

  return linkSchema.parse(link);
}

export async function getAllLinks() {
  // Get all keys of links
  const keys = await redis.keys(`${PARENT_KEY}:*:url`);

  // Get unique IDs of links
  const ids = [...new Set(keys.map((key) => key.replace(`${PARENT_KEY}:`, "").split(":")[0]))];

  // Return empty array if no links found
  if (!ids || !ids.length) return [];

  // Get all fields of schema except ID
  const fields = Object.keys(linkSchema.shape).filter((key) => key !== "id");

  // Get values of all links
  const values = await redis.mget<string[]>(ids.flatMap((id) => fields.map((field) => `${PARENT_KEY}:${id}:${field}`)));

  // Map respective values to each link and its fields
  return ids.map((id, index) => {
    const link: Record<string, string> = { id };
    fields.forEach((field, fieldIndex) => {
      link[field] = values[index * fields.length + fieldIndex];
    });

    return linkSchema.parse(link);
  });
}

export async function updateLink(id: string, url: string) {
  // Check if link exists in cache
  const exists = await checkLinkExists(id);
  if (!exists) throw new Error("Link does not exist.");

  // Update link information in cache
  const success = await redis.set(`${PARENT_KEY}:${id}:url`, url).then((res) => res === "OK");

  if (!success) throw new Error("Failed to update link in cache.");

  return getLink(id);
}

export async function deleteLink(id: string) {
  // Check if link exists in cache
  const exists = await checkLinkExists(id);
  if (!exists) throw new Error("Link does not exist.");

  // Get keys related to link
  const keys = await redis.keys(`${PARENT_KEY}:${id}:*`);

  // Get all fields of schema except ID
  const fields = Object.keys(linkSchema.shape).filter((key) => key !== "id");

  // Delete all related keys
  const count = await redis.del(...keys);

  if (count !== fields.length) throw new Error("Failed to delete link in cache.");
}

export async function checkLinkExists(id: string) {
  const exists = await redis.exists(`${PARENT_KEY}:${id}:url`);
  return exists === 1;
}

export async function incrementLinkClicks(id: string) {
  // Check if link exists in cache
  const exists = await checkLinkExists(id);
  if (!exists) throw new Error("Link does not exist.");

  // Increment link clicks and return new value
  return redis.incr(`${PARENT_KEY}:${id}:clicks`).then((clicks) => clicks);
}