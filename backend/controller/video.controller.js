const asyncHandler = require("../middleware/asyncHandler");
const videoService = require("../services/video.service");

// NOTE: splitting the logic part, DB calls to service component to increase reuseability

const getAllVideos = asyncHandler(async (req, res) => {
    const { videos, count, page, pages } = await videoService.getAllVideos(req);

    res.status(200).json({
        data: videos,
        count,
        page,
        pages
    });
})

const getFilteredVideos = asyncHandler(async (req, res) => {
    const { videos, count, page, pages } = await videoService.getFilteredVideos(req);

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