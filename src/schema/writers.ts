import {text, integer, sqliteTable, uniqueIndex} from 'drizzle-orm/sqlite-core'

export const writers = sqliteTable("writers", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  pseudonym: text("pseudonym").notNull(),
  comment: text("comment").default("")
}, (writer) => ({
  uniqueIdx: uniqueIndex("unique_pseudonym").on(writer.pseudonym)
}))
