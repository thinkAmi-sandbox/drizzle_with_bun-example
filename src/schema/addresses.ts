import {primaryKey, sqliteTable, text} from 'drizzle-orm/sqlite-core'

export const addresses = sqliteTable("addresses", {
  prefecture: text("prefecture"),
  municipality: text("name"),
}, (address) => ({
  // ref: https://github.com/drizzle-team/drizzle-orm/blob/0.30.9/drizzle-orm/src/sqlite-core/primary-keys.ts#L11
  compositePk: primaryKey({columns: [address.prefecture, address.municipality]})
}))
