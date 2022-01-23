const express = require('express');  // Build my REST API
const mongoose = require('mongoose');  // Used for CRUD operations
const cors = require('cors');  // CORS


// const videoRoutes = require('./routes/video.routes');
const fetchYoutubeAPIScheduler = require('./utils/taskScheduler');

// constants
const MONGO_URI = require('./config/constants')

// Initialize express server
const app = express();

app.use(cors());
app.use(express.json());

// mongoDB config for backend API
const mongodbConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // useFindAndModify: false
};

mongoose.connect(MONGO_URI, mongodbConnectionOptions, (error) => {
    if (error) {
        return console.error('error: ', error);
    }
    console.log("mongoDB working succesfully");
});

app.get('/', (req, res) => {
    res.send('Welcome to the task scheduler backend');
});

const API_ENDPOINT = '/api/v1/'

// These endpoint are public routes
// app.use(`${API_ENDPOINT}/videos`, videoRoutes);

fetchYoutubeAPIScheduler();

// // Authentication verifier middleware, please do not move. Below routes are private.
// app.use(authenticationRoutes);

// server config listen to PORT
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`);
})
