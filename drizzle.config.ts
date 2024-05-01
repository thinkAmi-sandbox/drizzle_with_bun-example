import type { Config } from "drizzle-kit"
import { migrate } from "drizzle-orm/bun-sqlite/migrator"
export default {
  schema: "./src/schema/*",
  out: "./drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./sqlite.db"
  }
} satisfies Config