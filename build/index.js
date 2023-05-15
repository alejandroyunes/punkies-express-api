"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors = require('cors');
const blogs_1 = __importDefault(require("./routes/blogs"));
const categories_1 = __importDefault(require("./routes/categories"));
const connectToMongoose = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(`${process.env.MONGO_DB}`);
        console.log('connected to the server');
    }
    catch (error) {
        console.log(error);
    }
});
connectToMongoose();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
const port = 3001;
app.use('/blog', blogs_1.default);
app.use('/category', categories_1.default);
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.set('strictPopulate', true);
app.listen(port, () => {
    console.log(`Server Running`);
});
