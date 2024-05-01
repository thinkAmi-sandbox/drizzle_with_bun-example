import type { Config } from "drizzle-kit"
import { migrate } from "drizzle-orm/bun-sqlite/migrator"
export default {
  schema: "./src/schema/*",
  out: "./drizzle",
} satisfies Config