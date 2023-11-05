import { Router } from "express";
import * as listsController from "./lists.controller.mjs";

export const router = Router();

router
  .get("/", listsController.getAllLists)
  .post("/", listsController.createList)
 