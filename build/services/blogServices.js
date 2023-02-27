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
exports.postCommentBlog = exports.getComments = exports.getBlogsOrBlogsByCategory = exports.getBlogsBrief = void 0;
const categories_1 = __importDefault(require("../models/categories"));
const CommentSchema = require('../models/comments');
const BlogSchema = require('../models/blog');
const getBlogsBrief = (req) => {
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    const result = BlogSchema.paginate({}, { limit: limit, page: page, populate: 'category', sort: { date: -1 } });
    return result;
};
exports.getBlogsBrief = getBlogsBrief;
const getBlogsOrBlogsByCategory = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const blogsByCategory = yield categories_1.default.findById(req.params.id).exec();
    if (blogsByCategory) {
        const limit = req.query.limit || 2;
        const page = req.query.page || 1;
        const id = req.params.id;
        const categoryBlogs = yield BlogSchema.paginate({ category: id }, { limit: limit, page: page, populate: 'category', sort: { date: -1 } });
        return categoryBlogs;
    }
    const blog = yield BlogSchema.findById(req.params.id);
    return blog;
});
exports.getBlogsOrBlogsByCategory = getBlogsOrBlogsByCategory;
const getComments = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield CommentSchema.find({ blogId: id }).populate('comment').exec();
    return comment;
});
exports.getComments = getComments;
const postCommentBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = new CommentSchema(req.body);
        const savedComment = yield comment.save();
        res.status(200).json({ message: 'ok' });
        res.send(savedComment);
    }
    catch (err) {
        res.send(err);
    }
});
exports.postCommentBlog = postCommentBlog;
