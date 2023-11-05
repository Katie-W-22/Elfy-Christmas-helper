import express from "express";
import morgan from "morgan";
import { router as listsRouter } from "./lists/lists.router.mjs";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/lists", listsRouter);

export default app;
