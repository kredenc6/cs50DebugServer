"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helpFunctions_1 = require("./helpFunctions");
const DEFAULT_PORT = 3000;
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT && (0, helpFunctions_1.strToNumber)(process.env.PORT) || DEFAULT_PORT;
app.get("/", (req, res) => {
    res.send("Hello World!"); // test
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
