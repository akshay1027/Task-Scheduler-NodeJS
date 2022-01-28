const express = require('express');
const router = express.Router();

const {
    videosController
} = require('../../controller/video.controller');

router.get('/videos', videosController);
// router.get('/search', getFilteredVideos);

module.exports = router;
