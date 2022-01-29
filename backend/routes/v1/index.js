const express = require('express');
const router = express.Router();

const videoRoutes = require("../../controller/video.route");

router.use('/videos', videoRoutes);
// router.get('/search', getFilteredVideos);

module.exports = router;
