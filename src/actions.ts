"use server";

import { headers } from "next/headers";

export async function getURL() {
  return new URL(headers().get("x-url") || "");
}