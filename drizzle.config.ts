import type { Config } from "drizzle-kit"
import { migrate } from "drizzle-orm/bun-sqlite/migrator"
export default {
  schema: "./src/schema/*",
  out: "./drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./my_data.db"
  }
} satisfies Config