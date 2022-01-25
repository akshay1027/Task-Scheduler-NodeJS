const { google } = require("googleapis");
const dotenv = require('dotenv');  //  Keep sensitive data
const VideoModel = require("../models/video.model");
const saveDataToDB = require("./saveDataToDB");
// const saveDataToDB = require("../utils/saveDataToDB");

dotenv.config();

const fetchYoutubeAPI = async () => {
    // constants
    const prefetchedSearch = "football";
    const publishedAfter = "2021-06-19T16:45:01Z";
    const maxResults = 4;

    try {
        const response = await google.youtube("v3").search.list({
            key: process.env.YOUTUBE_KEY.split(","),
            part: "snippet",
            order: "date",
            q: prefetchedSearch,
            publishedAfter,
            maxResults
        });

        const { data } = response;
        const filteredData = data.items.map((item) => item.snippet);

        // const filteredData = data.items.map((item) => item.snippet.thumbnails.default.url);
        // console.log("details : ", filteredData);
        // const saveData = await saveDataToDB(filteredData);

        const saveData = await filteredData.map((item) => {
            VideoModel.create({
                "title": item.title,
                "description": item.description,
                "channelTitle": item.channelTitle,
                "thumbnails": item.thumbnails.default.url,
                "liveBroadcastContent": item.liveBroadcastContent,
                "publishedAt": item.publishedAt
            })
        })

        console.log("Returned data ⭐", saveData);

        // await VideoModel.sort({ publishedAt: 'asc' }).save();

        // console.log('Document saved in db = ', saveData);

    } catch (error) {
        console.log('error =', error);
    }
};

module.exports = fetchYoutubeAPI;