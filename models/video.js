const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {type: String, required: true},
    user: {type: Schema.ObjectId, ref: 'User'}
}, {timestamps: true})

const videoSchema = new Schema({
    url: {type: String, required: true},
    requester: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true},
    requestDescription: {type: String, required: true},
    editor: {type: Schema.Types.ObjectId, ref: 'User'},
    editedResponse: {type: String},
    comments: [commentSchema],
}, {timestamps: true})


module.exports = mongoose.model('Video', videoSchema)