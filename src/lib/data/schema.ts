import { z } from "zod";

export const linkSchema = z.object({
  id: z.string(),
  url: z.string().url(),
  clicks: z.number().int(),
});

export type LinkInfo = z.infer<typeof linkSchema>;