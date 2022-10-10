const Video = require('../../models/video')
const { default: OrderHistoryPage } = require('../../src/pages/VideoHistoryPage/VideoHistoryPage')

module.exports = {
    ccVideoRequest,
}

async function ccVideoRequest(req, res) {
    // pull the video history for content creators that are awaiting an editor
    const history = await Video.find({requester: req.user._id, editor: undefined})
    res.json(history)
}

async function ccVideoEdited(req, res) {
    // pull the video history for videos in progress of being edited
    const edited = await Video.find({requester: req.user_id, editor: true})
}