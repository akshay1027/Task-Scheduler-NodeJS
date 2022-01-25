API ENDPOINTS: 

1)  About: Get all the videos in db (fetched from youtube API asynchronously every 10 secs). Paginated response.

    HTTP method: GET

    Route (without optional queries): /api/v1/videos

    Optional Queries:
     - page: default 1
     - pageSize: default 5

    Example Response: 

    ```
    {
    "data": [
        {
            "_id": "61eed585b1c64a9feaddcdce",
            "title": "Football Clippings",
            "description": "",
            "channelTitle": "Football Clippings",
            "thumbnails": "https://yt3.ggpht.com/kKvpCK-6k8jtAQ1O47ebH_auBqbb_TOZlMsdafK0FruOUJ7eb3QE6F017Uz7u_Yj2AsVte8OYg=s88-c-k-c0xffffffff-no-rj-mo",
            "liveBroadcastContent": "none",
            "publishedAt": "2022-01-24T13:11:58.000Z",
            "__v": 0
        },
        {
            "_id": "61eed58fb1c64a9feaddcdd6",
            "title": "Football Reels Compilation | Tiktok Football Reels | 2022 #44",
            "description": "In this video I've compiled football reels and tiktok videos. The main cast in the video are Ronaldo Messi Neymar Mbappe and ...",
            "channelTitle": "Tiktok Football",
            "thumbnails": "https://i.ytimg.com/vi/PqOQoRjsWjY/default.jpg",
            "liveBroadcastContent": "none",
            "publishedAt": "2022-01-24T14:00:13.000Z",
            "__v": 0
        },
        {
            "_id": "61eed585b1c64a9feaddcdcd",
            "title": "Hilarious Moments In Football!",
            "description": "In this video, you will enjoy some Hilarious Football Moments. IF YOU LIKE THIS VIDEO JOIN THE CHANNEL: ...",
            "channelTitle": "FOOT4K",
            "thumbnails": "https://i.ytimg.com/vi/5ElNrppzqmI/default.jpg",
            "liveBroadcastContent": "none",
            "publishedAt": "2022-01-24T14:30:02.000Z",
            "__v": 0
        },
        {
            "_id": "61eed585b1c64a9feaddcdcb",
            "title": "⚽ CAN 2021 : Cameroun - Comores : Les Lions en patrons ? / Guinée - Gambie (Football)",
            "description": "CAN 2021 : Cameroun - Comores : Les Lions en patrons ? / Guinée - Gambie (Football) Le pays hôte rentre en lice dans ces ...",
            "channelTitle": "Winamax",
            "thumbnails": "https://i.ytimg.com/vi/h_wMQ5oDtdk/default.jpg",
            "liveBroadcastContent": "none",
            "publishedAt": "2022-01-24T15:56:56.000Z",
            "__v": 0
        },
        {
            "_id": "61eed585b1c64a9feaddcdcc",
            "title": "⚽ Football Live⚽ Guinea vs Gambia- Africa Cup of Nations - 24th January 2022 - Full Match",
            "description": "A simulation of the upcoming match in the Africa Cup of Nations , Guinea vs Gambia. Guinea vs Gambia - Africa Cup of Nations ...",
            "channelTitle": "CheekyMonkeyGaming",
            "thumbnails": "https://i.ytimg.com/vi/QqwCgTpj29I/default_live.jpg",
            "liveBroadcastContent": "live",
            "publishedAt": "2022-01-24T15:57:11.000Z",
            "__v": 0
        }
    ],
    "count": 5,
    "page": 1,
    "pages": 8
    }
    ```

2)  About: Get all videos that are filtered after the given search query is executed. Paginated response.

    HTTP method: GET

    Route: /api/v1/videos/search?searchString=Comores

    Optional Queries:
     - page: default 1
     - pageSize: default 5

    Example Response: 

    ```
    {
    "data": [
        {
            "_id": "61ef2cdc45cb1ceecd82915a",
            "title": "🔴 Cameroun - Comores / CAN 2021 - Le Match en direct (Football)",
            "description": "Vivez le huitième de finale de la CAN 2021 entre le Cameroun et les Comores : Le programme du match en direct : Cameroun ...",
            "channelTitle": "Winamax",
            "thumbnails": "https://i.ytimg.com/vi/gB85REnLuXI/default.jpg",
            "liveBroadcastContent": "none",
            "publishedAt": "2022-01-24T21:06:08.000Z",
            "__v": 0
        },
        {
            "_id": "61eed585b1c64a9feaddcdcb",
            "title": "⚽ CAN 2021 : Cameroun - Comores : Les Lions en patrons ? / Guinée - Gambie (Football)",
            "description": "CAN 2021 : Cameroun - Comores : Les Lions en patrons ? / Guinée - Gambie (Football) Le pays hôte rentre en lice dans ces ...",
            "channelTitle": "Winamax",
            "thumbnails": "https://i.ytimg.com/vi/h_wMQ5oDtdk/default.jpg",
            "liveBroadcastContent": "none",
            "publishedAt": "2022-01-24T15:56:56.000Z",
            "__v": 0
        }
    ],
    "count": 2,
    "page": 1,
    "pages": null
    }
    ```


