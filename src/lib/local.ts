import assets from "@/content/data/assets.json";
import events from "@/content/data/events.json";
import fs from "node:fs";
import path from "node:path";

export function getLocalAssets() {
  return assets;
}

export function getLocalEvents() {
  return events;
}

export function getLocalFile(name: string) {
  const filePath = path.join(process.cwd(), "src", "content", name);
  return fs.readFileSync(filePath, "utf-8");
}