import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    _id: String,
    name: String,
    image: String,
    joined: {
        type: Date,
        default: new Date()
    },
});

const User = mongoose.model('User',postSchema);

export default User;