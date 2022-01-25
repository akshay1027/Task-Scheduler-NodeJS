const { Schema, model } = require('mongoose');

const VideoSchema = new Schema(
    {
        title: { type: String, required: true, unique: "Title has to be unique to avoid same videos" },
        description: { type: String },
        channelTitle: { type: String, required: true },
        thumbnails: { type: 'String', required: true },
        liveBroadcastContent: { type: String, default: "none" },
        publishedAt: { type: Date }
    }
);

module.exports = VideoModel = model('Video', VideoSchema);
