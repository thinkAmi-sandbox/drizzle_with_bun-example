import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

export const writers = sqliteTable("writers", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
})
