import {Database} from "bun:sqlite";
import {drizzle} from "drizzle-orm/bun-sqlite";
import {publishers} from "./src/schema/publishers.ts";

const main = async () => {
  const sqlite = new Database("my_data.db")
  const db = drizzle(sqlite)

  const data: (typeof publishers.$inferInsert)[] = [
    { name: "foo" },
    { name: "bar" },
  ]

  console.log("start ------------->")
  // Data is not saved without await.
  await db.insert(publishers).values(data)
  console.log("<----------------end")
}

main()