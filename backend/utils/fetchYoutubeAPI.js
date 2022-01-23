import { GoogleApis } from "googleapis";

const fetchYoutubeAPI = async () => {
    try {
        // Each API may support multiple versions. With this sample, we're getting
        // v3 of the blogger API, and using an API key to authenticate.
        const blogger = GoogleApis.fetchYoutubeAPI({
            version: 'v3',
            auth: 'YOUR API KEY'
        });

        const params = {
            blogId: '3213900'
        };

        async function runSample() {
            const res = await blogger.blogs.get(params);
            console.log(`The blog url is ${res.data.url}`);
        }
        runSample().catch(console.error);
    } catch (error) {
        console.log('error =', error);
    }
};

module.exports = fetchYoutubeAPI;