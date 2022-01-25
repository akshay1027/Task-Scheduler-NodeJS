const VideoModel = require("../models/video.model");

const getAllVideos = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 5;
        const skip = (page - 1) * pageSize;
        const totalDocuments = await VideoModel.countDocuments();
        console.log("total docs", totalDocuments)
        const pages = Math.ceil(totalDocuments / pageSize)

        // Get videos -> Skip documents based on query -> Limit documents based on query -> sort the final result 
        const videos = await VideoModel
            .find()
            .sort({ createdAt: 'desc' })
            .skip(skip)
            .limit(pageSize)

        console.log("videos =", videos)

        res.status(200).json({
            data: videos,
            count: videos.length,
            page,
            pages
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
}

const getFilteredVideos = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 5;
        const skip = (page - 1) * pageSize;
        const totalDocuments = VideoModel.countDocuments();
        const pages = Math.ceil(totalDocuments / pageSize)

        // Get videos -> Skip documents based on query -> Limit documents based on query -> sort the final result 
        const videos = await VideoModel
            .find()
            .skip(skip)
            .limit(pageSize)
            .sort({ createdAt: desc });

        res.status(200).json({
            data: videos,
            count: videos.length,
            page,
            pages
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllVideos,
    getFilteredVideos
};