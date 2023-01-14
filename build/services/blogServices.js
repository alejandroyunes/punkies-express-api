"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogEntriesWithoutDescription = void 0;
const blog_1 = __importDefault(require("../models/blog"));
// import { NoDescriptionBlogEntry } from '../types'
const getBlogEntriesWithoutDescription = () => {
    return blog_1.default.find().then((result) => {
        return result.map(({ id, slug, title, brief, date, dateString, category, year }) => {
            return {
                id,
                slug,
                title,
                brief,
                dateString,
                date,
                category,
                year
            };
        }).sort((a, b) => { return b.date - a.date; });
    }).catch((err) => console.log(err));
};
exports.getBlogEntriesWithoutDescription = getBlogEntriesWithoutDescription;
