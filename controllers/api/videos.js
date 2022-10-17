const Video = require('../../models/video')

module.exports = {
    ccVideoRequest,
    editorGigs,
    ccVideoPost,
    myVideos,
    assign,
    deleteVideo,
    getComments,
    addComment,
    addUrl
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
    const video = await Video.findOne({_id: req.body._id})
    video.editor = req.user._id
    await video.save()
    res.json(video)
}

async function deleteVideo(req, res){
    await Video.findByIdAndDelete(req.body._id)
    res.json('video deleted')
}

async function getComments(req, res){
    const video = await Video.findOne({id:req.params._id})
    res.json(video.comments)
}

async function addComment(req, res){
    const video = await Video.findOne({_id: req.params.id})
    video.comments.push(req.body)
    await video.save()
    res.json(video)
}

async function addUrl(req, res){
    console.log('we are in the controller.')
    const video = await Video.findOne({_id: req.params.id})
    console.log(`back to the controller! this is video: ${video} and this is reqbody ${req.body.text}`)
    video.editedResponse = req.body.text
    await video.save()
    res.json(video)
}