"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogsByCategory = void 0;
// import Blog from '../models/blog'
const categories_1 = __importDefault(require("../models/categories"));
const getBlogsByCategory = (category) => {
    return categories_1.default.find(category).populate('Blog', { title: 1, brief: 1 });
};
exports.getBlogsByCategory = getBlogsByCategory;
