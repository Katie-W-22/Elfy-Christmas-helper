import * as listsModel from "./lists.model.mjs";

export async function getAllLists(req, res) {
  const lists = await listsModel.getAllLists();

  res.json({
    success: true,
    payload: lists,
  });
}

export async function createList(req, res) {
  const created = await listsModel.createList({
    name: req.body.name,
    gift: req.body.gift,
  });

  res.status(201).json({
    success: true,
    payload: created,
  });
}