const VideoModel = require("../models/video.model");
const asyncHandler = require("../middleware/asyncHandler");
const videoService = require("../services/video.service");

const getAllVideos = asyncHandler(async (req, res) => {
    const { videos, count, page, pages } = videoService.getAllVideos(req);

    res.status(200).json({
        data: videos,
        count,
        page,
        pages
    });
})

const getFilteredVideos = asyncHandler(async (req, res) => {
    const { videos, count, page, pages } = videoService.getFilteredVideos(req);

    res.status(200).json({
        data: videos,
        count,
        page,
        pages
    });
})

module.exports = {
    getAllVideos,
    getFilteredVideos
};