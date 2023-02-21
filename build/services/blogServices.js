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
const getBlogsOrBlogsByCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blogsByCategory = yield categories_1.default.findById(id).exec();
    if (blogsByCategory) {
        const blogs = yield BlogSchema.find({ category: id }).populate('category').sort({ date: 'desc' }).limit(10).exec();
        return blogs;
    }
    const blog = yield BlogSchema.findById(id);
    return blog;
});
exports.getBlogsOrBlogsByCategory = getBlogsOrBlogsByCategory;
const getComments = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield CommentSchema.find({ blogId: id }).populate('comment').exec();
    // const comment = await CommentSchema.paginate({}, { limit: 10, page: 1, populate: 'blogId', sort: { date: -1 } })
    return comment;
});
exports.getComments = getComments;
const postCommentBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = new CommentSchema(req.body);
    try {
        const savedComent = yield comment.save();
        res.status(200).json({ message: 'ok' });
        return savedComent;
    }
    catch (err) {
        res.status(err);
    }
});
exports.postCommentBlog = postCommentBlog;
// export const blogPatchComment = (req, res) => {
//   console.log(req.body.comment)
// }
// Room.find({}).sort('-date').exec((err, docs) => { ... });
// Room.find({}).sort({date: -1}).exec((err, docs) => { ... });
// Room.find({}).sort({date: 'desc'}).exec((err, docs) => { ... });
// Room.find({}).sort({date: 'descending'}).exec((err, docs) => { ... });
// Room.find({}).sort([['date', -1]]).exec((err, docs) => { ... });
// Room.find({}, null, {sort: '-date'}, (err, docs) => { ... });
// Room.find({}, null, {sort: {date: -1}}, (err, docs) => { ... });
// Room.find({}).sort({date: -1}).exec((err, docs) => { ... });
// Room.find({}).sort({date: 'desc'}).exec((err, docs) => { ... });
// Room.find({}).sort({date: 'descending'}).exec((err, docs) => { ... });
// Room.find({}).sort([['date', -1]]).exec((err, docs) => { ... });
// Room.find({}, null, {sort: '-date'}, (err, docs) => { ... });
// Room.find({}, null, {sort: {date: -1}}, (err, docs) => { ... });
