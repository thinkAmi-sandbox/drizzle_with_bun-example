import {foreignKey, integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {addresses} from "./addresses.ts";

export const shops = sqliteTable("shops", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  prefecture: text("prefecture"),
  municipality: text("municipality"),
}, (table) => (
  {
    fk: foreignKey({
      columns: [table.prefecture, table.municipality],
      foreignColumns: [addresses.prefecture, addresses.municipality],
      name: "address_names"
    })
  }
))
