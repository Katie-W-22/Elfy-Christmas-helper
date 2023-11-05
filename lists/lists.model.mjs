import { pool } from "../db/index.mjs";

export async function getAllLists() {
  const response = await pool.query("SELECT * FROM giftLists;");
  return response.rows;
}

export async function createList(list) {
  const response = await pool.query(
    "INSERT INTO giftLists (name, gift) VALUES ($1, $2) RETURNING *;",
    [list.name, list.gift]
  );
  return response.rows[0];
}