import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {organizations} from "./organizations.ts";

export const members = sqliteTable("members", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  organizerId: integer("organizer_id")
    .references(() => organizations.id, {
      onUpdate: 'set null',
      onDelete: 'cascade',
    })
})