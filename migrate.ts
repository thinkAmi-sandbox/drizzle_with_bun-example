import { migrate } from "drizzle-orm/bun-sqlite/migrator"

import { drizzle } from "drizzle-orm/bun-sqlite"
import { Database } from "bun:sqlite"

const sqlite = new Database("my_data.db")
const db = drizzle(sqlite)

// [Ignore] TS80007: await has no effect on the type of this expression.
await migrate(db, { migrationsFolder: "./drizzle" })