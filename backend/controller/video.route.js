const express = require('express');
const router = express.Router();

const videoController = require('./video.controller');

router.get('/', videoController.getAllVideos);
router.get('/search', videoController.getFilteredVideos);

module.exports = router;