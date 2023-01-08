import mongoose, { Schema, } from 'mongoose';

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    brief: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
})

export default mongoose.model('blog', blogSchema);