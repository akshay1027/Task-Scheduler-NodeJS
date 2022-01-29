const VideoModel = require("../models/video.model");

const getPaginatedResponse = async (req) => {

    const { page = 1, pageSize = 5 } = req.query;
    // const page = parseInt(req.query.page) || 1;
    // const pageSize = parseInt(req.query.pageSize) || 5;
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
    const { page, pageSize, skip, pages } = await getPaginatedResponse(req);

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

    const { searchString } = req.query;

    // partial search 👇
    // { "name": { "$regex": sear, "$options": "i" }

    // advanced search 👇
    // .find({ $text: { $search: searchString } })

    // get paginated response
    const { page, pageSize, skip, pages } = await getPaginatedResponse(req);

    // Get videos -> Skip documents based on query -> Limit documents based on query -> sort the final result 
    const videos = await VideoModel
        // .find({ "title": { $regex: searchString, $options: "i" } })
        .find({ $text: { $search: searchString } })
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