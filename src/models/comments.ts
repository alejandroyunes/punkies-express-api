import mongoose, { Schema } from "mongoose";
const mongoosePaginate = require('mongoose-paginate-v2');

const commentSchema = new Schema({
    blogId: { type: Schema.Types.ObjectId, ref: 'Blog' },
    comment: String,
    name: String,
    createdAt: Date
})

commentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Comment', commentSchema)