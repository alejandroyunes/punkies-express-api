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
const express_1 = __importDefault(require("express"));
const categories_1 = __importDefault(require("../models/categories"));
// import jsonfile from '../data/categories.json'
const categoryRouter = express_1.default.Router();
categoryRouter.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield categories_1.default.find();
    res.send(categories);
}));
// jsonfile.forEach(e => new categorySchema(e).save())
// router.get('/:category', async (req, res) => {
//   const category = await categoryServices.getBlogsByCategory(req.params.category)
//   return res.send(category)
// })
exports.default = categoryRouter;
