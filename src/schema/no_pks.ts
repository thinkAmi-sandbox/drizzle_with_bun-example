import {text, sqliteTable, integer} from 'drizzle-orm/sqlite-core'

export const noPks = sqliteTable("no_pks", {
  name: text("name"),
})