"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const blogServices = __importStar(require("../services/blogServices"));
const BlogSchema = require('../models/blog');
const blogRouter = express_1.default.Router();
blogRouter.get('/brief', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blogServices.getBlogsBrief(req);
    res.send(blog);
}));
blogRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blogServices.getBlogsOrBlogsByCategory(req.params.id);
    const comment = yield blogServices.getComments(req.params.id);
    res.send({ blog, comment });
}));
blogRouter.post('/comment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield blogServices.postCommentBlog(req, res);
    return comment;
}));
// blogRouter.patch('/patch', async (req, _) => {
//   const comment = await blogServices.blogPatchComment(req, _)
//   return comment
// })
// blogArray.forEach(e => {
//   const blog = new BlogSchema(e)
//   return blog.save()
// })
// commentArray.forEach(e => {
//   const blog = new CommentSchema(e)
//   return blog.save()
// })
exports.default = blogRouter;