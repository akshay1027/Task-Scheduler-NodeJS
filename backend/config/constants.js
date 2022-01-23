require("dotenv").config();

const YOUTUBE_TOKEN = process.env.YOUTUBE_TOKEN;
const MONGO_URI = process.env.MONGO_URI;

module.exports = {
    YOUTUBE_TOKEN,
    MONGO_URI
};