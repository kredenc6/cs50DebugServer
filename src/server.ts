import express from "express";
import dotenv from "dotenv";
import { strToNumber } from "./helpFunctions";

const DEFAULT_PORT = 3000;

dotenv.config();

const app = express();
const port = process.env.PORT && strToNumber(process.env.PORT) || DEFAULT_PORT;

app.get("/", (req, res) => {
  res.send("Hello World!") // test
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});