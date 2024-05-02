import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const publishers = sqliteTable("publishers", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
})