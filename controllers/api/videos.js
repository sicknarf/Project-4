const Video = require('../../models/video')

module.exports = {
    ccVideoRequest,
    editorGigs,
    ccVideoPost,
    myVideos,
    assign,
    deleteVideo
}

async function ccVideoRequest(req, res) {
    // pull the video history for content creators that are awaiting an editor
    const history = await Video.find({editor: null})
    res.json(history)
}


async function myVideos(req, res) {
    try{
    const myVids = await Video.find({requester: req.user._id})
    res.json(myVids)
    } catch {}
}

async function editorGigs(req, res) {
    // pull the video history for videos in progress of being edited
    try{
    const edited = await Video.find({editor: req.user._id})
    console.log(edited)
    res.json(edited)
    } catch {}
}

async function ccVideoPost(req, res) {
    const video = new Video(req.body)
    video.requester = req.user._id
    await video.save()
    res.json(video)
}

async function assign(req, res) {
    console.log(`this is reqparamsid ${req.user._id}`)
    const video = await Video.findOne({_id: req.body._id})
    video.editor = req.user._id
    console.log(video)
    await video.save()
    res.json(video)
}

async function deleteVideo(req, res){
    console.log('video delete making it to controller')
    console.log(`this is req.body ${req.body._id}`)
    await Video.findByIdAndDelete(req.body._id)
    res.json('video deleted')
}