import express from "express";
import dotenv from "dotenv";
import { strToNumber } from "./helpFunctions";

const DEFAULT_PORT = 3000;

dotenv.config();

const app = express();
const port = process.env.PORT && strToNumber(process.env.PORT) || DEFAULT_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!")
});

app.post("/", (req, res) => {
  const data = req.body;
  if (data) {
    console.log(data);
    return res.send("OK");
  }

  return res.sendStatus(400);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});