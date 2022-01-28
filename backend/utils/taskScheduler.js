const fetchYoutubeAPI = require('./fetchYoutubeAPI')
const nodeCron = require("node-cron");

const TaskSchedulerTimeInterval = 1;

// Schedule fetching youtube search API to run on a set interval of time
const fetchYoutubeAPIScheduler = () => {
    try {
        nodeCron.schedule(`*/${TaskSchedulerTimeInterval} * * * *`, async () => {
            // console.log(`running a task every ${TaskSchedulerTimeInterval} seconds`);
            await fetchYoutubeAPI();
        })
    } catch (error) {
        console.log('error =', error);
    }
};

module.exports = fetchYoutubeAPIScheduler;