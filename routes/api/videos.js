const express = require('express');
const router = express.Router();
const videosCtrl = require('../../controllers/api/videos');

// GET 
router.get('/videos', videosCtrl.ccVideoRequest);
router.get('/my-videos', videosCtrl.myVideos);
router.get('/videos/in-progress', videosCtrl.ccVideoEdited);

// POST
router.post('/videos/creators/new', videosCtrl.ccVideoPost);
router.post('/videos/editors/assign/:id', videosCtrl.assign);

module.exports = router