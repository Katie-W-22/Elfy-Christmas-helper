import { pool } from "./index.mjs";

/**
 * @param {{ name: string; gift: string; }[]} data - An array of gift objects without ids
 */
export async function resetListsTable(data) {
  await pool.query(`
    DROP TABLE IF EXISTS giftLists;
    CREATE TABLE giftLists (
      name TEXT NOT NULL,
      gift TEXT NOT NULL
    );`);

  const inserted = await pool.query(
    `INSERT INTO giftLists (
      name, gift
    ) (
      SELECT name, gift
      FROM json_populate_recordset(NULL::giftLists, $1::JSON)
    )
    RETURNING *;`,
    [JSON.stringify(data)]
  );

  return inserted.rows;
}
