import fs from "fs";
import express from "express";
import cors from "cors";
import router from "./routes/ticketsRoute.js";

export const users = JSON.parse(fs.readFileSync("data/users.json", "utf-8"));

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/tickets", router);

export default app;
