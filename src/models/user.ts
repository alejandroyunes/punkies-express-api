import mongoose, { Schema, } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

export default mongoose.model('user', userSchema);