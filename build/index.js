"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware transforms the req.body to a json
const PORT = 3001;
app.get("/ping", (_, res) => {
    console.log("someone pined");
    res.send("pong");
});
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
