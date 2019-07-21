import mongoose from 'mongoose';
import {ObjectID} from 'mongodb';

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const UserSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    _id: {
        type: String,
        required: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

export default mongoose.model('User', UserSchema);
