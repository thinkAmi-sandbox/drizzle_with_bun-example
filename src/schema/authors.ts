import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

export const authors = sqliteTable("authors", {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  age: integer("age"),
  note: text("note"),
})
