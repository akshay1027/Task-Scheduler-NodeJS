const VideoModel = require("../models/video.model");

const getPaginatedResponse = async (req) => {

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    const skip = (page - 1) * pageSize;
    const totalDocuments = VideoModel.countDocuments();
    const pages = Math.ceil(totalDocuments / pageSize)

    return {
        page,
        pageSize,
        skip,
        pages
    };
};

const getAllVideos = async (req) => {
    // get paginated response
    const { page, pageSize, skip, pages } = getPaginatedResponse(req);

    // Get videos -> Skip documents based on query -> Limit documents based on query -> sort the final result 
    const videos = await VideoModel
        .find()
        .sort({ createdAt: 'desc' })
        .skip(skip)
        .limit(pageSize);

    return {
        videos,
        count: videos.length,
        page,
        pages
    };

};

const getFilteredVideos = async (req) => {

    // get paginated response
    const { page, pageSize, skip, pages } = getPaginatedResponse(req);

    // Get videos -> Skip documents based on query -> Limit documents based on query -> sort the final result 
    const videos = await VideoModel
        .find({ $text: { $regex: searchString } })
        .sort({ createdAt: "desc" })
        .skip(skip)
        .limit(pageSize);

    return {
        videos,
        count: videos.length,
        page,
        pages
    };
};

module.exports = {
    getAllVideos,
    getFilteredVideos
};