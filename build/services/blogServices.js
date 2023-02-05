"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBriefDescription = void 0;
const blog_1 = __importDefault(require("../models/blog"));
// import { NoDescriptionBlogEntry } from '../types'
//import { NoDescriptionBlogEntry } from '../types'
// export const getBlogEntriesWithoutDescription = () => {
//     return blogSchema.find().then((result) => {
//         return result.map(({ id, slug, title, brief, date, dateString, category, year }) => {
//             return {
//                 id,
//                 slug,
//                 category,
//                 title,
//                 brief,
//                 dateString,
//                 date,
//                 year
//             }
//         }).sort((a: any, b: any) => { return b.date - a.date })
//     }).catch((err) => console.log(err))
// }
// export const getBlogEntriesWithoutDescription = (): any => {
//   return blogSchema
//     .find()
//     .populate('Blog', { title: 1 })
//     .then(result => {
//       return result.map(
//         ({ slug, title, brief, dateString, date, year, category }) => {
//           return {
//             slug,
//             title,
//             brief,
//             dateString,
//             category,
//             date,
//             year
//           }
//         }
//       )
//     })
// }
const getBriefDescription = () => {
    return blog_1.default
        .find()
        .select('slug title brief date dateString')
        .populate('category', 'category').sort({ date: 'desc' }).limit(10);
};
exports.getBriefDescription = getBriefDescription;
// Room.find({}).sort('-date').exec((err, docs) => { ... });
// Room.find({}).sort({date: -1}).exec((err, docs) => { ... });
// Room.find({}).sort({date: 'desc'}).exec((err, docs) => { ... });
// Room.find({}).sort({date: 'descending'}).exec((err, docs) => { ... });
// Room.find({}).sort([['date', -1]]).exec((err, docs) => { ... });
// Room.find({}, null, {sort: '-date'}, (err, docs) => { ... });
// Room.find({}, null, {sort: {date: -1}}, (err, docs) => { ... });
