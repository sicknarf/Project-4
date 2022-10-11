const mongoose = require('mongoose');
const Schema = mongoose.Schema

const videoSchema = new Schema({
    url: {type: String, required: true},
    requester: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true},
    requestDescription: {type: String, required: true},
    editor: {type: Schema.Types.ObjectId, ref: 'User'},
    editedResponse: {type: String},
    comments: []
})


module.exports = mongoose.model('Video', videoSchema)