const Schema = require('mongoose').Schema;

const videoSchema = new Schema({
    url: {type: String, required: true},
    requester: {type: Schema.Types.ObjectId, ref: 'User'},
    requestdescription: {type: String, required: true},
    editor: {type: Schema.Types.ObjectId, ref: 'User'},
    editedResponse: {type: String},
    comments: []
})

module.exports = mongoose.module('Video', videoSchema)