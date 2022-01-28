const express = require('express');
const cors = require('cors');

const errorHandler = require('./middleware/errorHandler');
const initializeConnectionToDB = require('./utils/connectToDB');
const fetchYoutubeAPIScheduler = require('./utils/taskScheduler');

const appRoutes = require('./routes/v1');

const API_ENDPOINT = '/api/v1';

const app = express();
app.use(express.json());
app.use(cors());

// initializeConnectionToDB();
// fetchYoutubeAPIScheduler();

app.get('/', (req, res) => {
    res.send('Welcome to the task scheduler backend');
});

// These endpoint are public routes
app.use(`/${API_ENDPOINT}`, appRoutes);

// Error Handler
app.use(errorHandler);

// server config listen to PORT
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`);
})
