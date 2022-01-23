const nodeCron = require("node-cron");

const TaskSchedulerTimeInterval = 2;

// Schedule fetching youtube search API to run on a set interval of time
const fetchYoutubeAPIScheduler = async () => {
    try {
        nodeCron.schedule(`*/${TaskSchedulerTimeInterval} * * * * *`, async () => {
            console.log(`running a task every ${TaskSchedulerTimeInterval} seconds`);
        })
    } catch (error) {
        console.log('error =', error);
    }
};

module.exports = fetchYoutubeAPIScheduler;