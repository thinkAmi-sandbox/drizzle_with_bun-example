import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {publishers} from "./publishers.ts";

export const books = sqliteTable("books", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  publisherId: integer("publisher_id").references(() => publishers.id)
})