import assets from "@/content/data/assets.json";
import events from "@/content/data/events.json";
import fs from "node:fs";
import path from "node:path";

export function getAssets() {
  return assets;
}

export function getAsset(id: string) {
  return getAssets().find((asset) => asset.id === id);
}

export function getEvents() {
  return events;
}

export function getTextFile(name: string) {
  const filePath = path.join(process.cwd(), "src", "content", name);
  return fs.readFileSync(filePath, "utf-8");
}