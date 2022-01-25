const express = require('express');
const router = express.Router();

const {
    getAllVideos,
    getFilteredVideos
} = require('../controller/video.controller');

// All responses are paginated
router.get('/', getAllVideos);
// router.post('/search', authenticationVerifier, getFilteredVideos);
// router.get('/reviews/:tutorId', getAllReviewsForTutor)

module.exports = router;