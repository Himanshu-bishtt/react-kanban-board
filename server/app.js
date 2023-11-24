import express from "express";
import cors from "cors";
import ticketRouter from "./routes/ticketsRoute.js";
import userRouter from "./routes/usersRoute.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/tickets", ticketRouter);
app.use("/api/v1/users", userRouter);

export default app;
