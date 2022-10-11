const mongoose = require('mongoose');
const Schema = mongoose.Schema

const videoSchema = new Schema({
    url: {type: String, required: true},
    requester: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, },
    requestDescription: {type: String, required: true},
    editor: {type: Schema.Types.ObjectId, ref: 'User'},
    editedResponse: {type: String},
    comments: []
})

videoSchema.statics.getVideo = function (body) {
    return this.findOneAndUpdate(
        {url: body.url, requester: body.requester},
        {upsert: true, new: true}
    )
}

module.exports = mongoose.model('Video', videoSchema)