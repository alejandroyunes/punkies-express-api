import mongoose, { Schema, } from 'mongoose';

const blogSchema = new Schema({
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