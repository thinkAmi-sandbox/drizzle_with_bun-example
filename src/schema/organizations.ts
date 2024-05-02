import {type AnySQLiteColumn, integer, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const organizations = sqliteTable("organizations", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  parentId: integer("parent_id").references((): AnySQLiteColumn => organizations.id),
})