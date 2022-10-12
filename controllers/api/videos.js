const Video = require('../../models/video')

module.exports = {
    ccVideoRequest,
    ccVideoEdited,
    ccVideoPost,
    myVideos,
}

async function ccVideoRequest(req, res) {
    // pull the video history for content creators that are awaiting an editor
    const history = await Video.find({editor: null})
    res.json(history)
}


async function myVideos(req, res) {
    const myVids = await Video.find({requester: req.user._id})
    res.json(myVids)
}

async function ccVideoEdited(req, res) {
    // pull the video history for videos in progress of being edited
    const edited = await Video.find({requester: req.user_id, editor: !null})
    res.json(edited)
}

async function ccVideoPost(req, res) {
    const video = new Video(req.body)
    video.requester = req.user._id
    await video.save()
    res.json(video)
}

