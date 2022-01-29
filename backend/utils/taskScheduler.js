const fetchYoutubeAPI = require('./fetchYoutubeAPI')
const nodeCron = require("node-cron");

const TaskSchedulerTimeInterval = 1;

// Schedule fetching youtube search API to run on a set interval of time
const fetchYoutubeAPIScheduler = () => {
    try {
        // every n mins
        nodeCron.schedule(`*/${TaskSchedulerTimeInterval} * * * *`, async () => {
            await fetchYoutubeAPI();
        })
    } catch (error) {
        console.log('error =', error);
    }
};

module.exports = fetchYoutubeAPIScheduler;