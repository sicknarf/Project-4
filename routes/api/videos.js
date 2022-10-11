const express = require('express');
const router = express.Router();
const videosCtrl = require('../../controllers/api/videos');

// GET 
router.get('/videos', videosCtrl.ccVideoRequest);
router.get('/videos/in-progress', videosCtrl.ccVideoEdited);

// POST
router.post('/videos/creators/new', videosCtrl.ccVideoPost)

module.exports = router