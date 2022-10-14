const express = require('express');
const router = express.Router();
const videosCtrl = require('../../controllers/api/videos');

// GET 
router.get('/videos', videosCtrl.ccVideoRequest);
router.get('/my-videos', videosCtrl.myVideos);
router.get('/videos/in-progress', videosCtrl.editorGigs);
router.get('/portal/comments/:id', videosCtrl.getComments)

// POST
router.post('/videos/creators/new', videosCtrl.ccVideoPost);
router.post('/videos/delete', videosCtrl.deleteVideo)
router.post('/videos/editors/assign/:id', videosCtrl.assign);
router.post('/portal/new-comment/:id', videosCtrl.addComment);
router.post('/portal/new-url/:id', videosCtrl.addUrl)

module.exports = router