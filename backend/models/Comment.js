const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        trim: true,
        required: true
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;