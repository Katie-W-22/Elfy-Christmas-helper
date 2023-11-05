import { resetListsTable } from "./helpers.mjs";
import { pool } from "./index.mjs";

try {
  const insertedRows = await resetListsTable([
    { name: "Anna", gift: "apple"},
    { name: "Bob", gift: "banana" },
  ]);
  console.log("Reset giftLists table", insertedRows);
} catch (e) {
  console.error(e);
  console.error("Failed to reset tables");
} finally {
  await pool.end();
}
