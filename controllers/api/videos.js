const Video = require('../../models/video')

module.exports = {
    ccVideoRequest,
    ccVideoEdited,
    ccVideoPost,
    myVideos,
    assign
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

async function assign(req, res) {
    console.log(`this is reqparamsid ${req.params.id}`)
    const video = await Video.find({_id: req.body._id})
    video.editor = req.params.id
    await video.save()
    console.log(video)
}
