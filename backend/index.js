const express = require('express');  // Build my REST API
const mongoose = require('mongoose');  // Used for CRUD operations
const cors = require('cors');  // CORS
const dotenv = require('dotenv');  //  Keep sensitive data

const videoRoutes = require('./routes/video.routes');

// const errorHandler = require('./middleware/errorHandler');
const fetchYoutubeAPIScheduler = require('./utils/taskScheduler');

const API_ENDPOINT = '/api/v1';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const mongodbConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(process.env.MONGO_URI, mongodbConnectionOptions, (error) => {
    if (error) {
        return console.error('error: ', error);
    }
    console.log("mongoDB working succesfully");
});

fetchYoutubeAPIScheduler();

app.get('/', (req, res) => {
    res.send('Welcome to the task scheduler backend');
});

// These endpoint are public routes
app.use(`${API_ENDPOINT}/videos`, videoRoutes);

// error handler 
// app.use(errorHandler);

// server config listen to PORT
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`);
})
