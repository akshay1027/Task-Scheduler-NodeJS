const VideoModel = require("../models/video.model");

const saveDataToDB = async (filteredData) => {

    try {
        await filteredData.map((item) => {
            VideoModel.create({
                "title": item.title,
                "description": item.description,
                "channelTitle": item.channelTitle,
                "thumbnails": item.thumbnails.default.url,
                "liveBroadcastContent": item.liveBroadcastContent,
                "publishedAt": item.publishedAt
            })
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = saveDataToDB;