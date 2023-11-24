import mongoose from "mongoose";
import dotenv from "dotenv";
import process from "process";

dotenv.config();
import app from "./app.js";

const DB = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successfull"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
