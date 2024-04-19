import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    SITE_URL: z.string().url().default("https://includegurias.com"),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    SITE_URL: process.env.SITE_URL,
  },
})
