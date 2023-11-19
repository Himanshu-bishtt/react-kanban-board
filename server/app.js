import fs from "fs";
import express from "express";
import cors from "cors";

const tickets = fs.readFileSync("data/tickets.json", "utf-8");
const users = fs.readFileSync("data/users.json", "utf-8");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "success" });
});

export default app;
