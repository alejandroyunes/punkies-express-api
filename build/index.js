"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors = require('cors');
const diaries_1 = __importDefault(require("./routes/diaries"));
const blogs_1 = __importDefault(require("./routes/blogs"));
mongoose_1.default
    .connect(`${process.env.MONGO_DB}`)
    .then(() => console.log('connected to the server'))
    .catch((error) => console.log(error));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
const port = process.env.PORT || 3001;
app.get("/ping", (req, res) => {
    console.log("someone pined");
    res.send(req.body);
});
app.use('/api/diaries', diaries_1.default);
app.use('/blog', blogs_1.default);
mongoose_1.default.set("strictQuery", false);
mongoose_1.default
    .connect(`${process.env.MONGO_DB}`)
    .then(() => console.log('conected to the database'))
    .catch((error) => console.log(error));
app.listen(port, () => {
    console.log(`Server Running`);
});
