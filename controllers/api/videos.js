const Video = require('../../models/video')

module.exports = {
    ccVideoRequest,
    ccVideoEdited,
    ccVideoPost
}

async function ccVideoRequest(req, res) {
    // pull the video history for content creators that are awaiting an editor
    const history = await Video.find({requester: req.user._id, editor: undefined})
    res.json(history)
}

async function ccVideoEdited(req, res) {
    // pull the video history for videos in progress of being edited
    const edited = await Video.find({requester: req.user_id, editor: !undefined})
    res.json(history)
}

async function ccVideoPost(req, res) {
    const video = await Video.create(req.body)
    console.log(video)
    res.json(video)
}