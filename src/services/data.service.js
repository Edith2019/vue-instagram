import { ENDPOINT, MAX_CAPTION_LENGTH } from "../consts"


// Display 150 Char and replace the rest by...
const minimizeCaption = (caption) => {
    const length = caption.lenght;
    console.log("length", length)
    return length > MAX_CAPTION_LENGTH ? `${caption.substring(0, MAX_CAPTION_LENGTH)}...` : caption;
}

//Take the relevant data from the response about video
const minimizeVideosData = (videos) => {
    const { edges } = videos
    if (!edges) {
        throw Error('bad data in minimizeVideo')
    }
    return edges.map((edge) => {
        const {
            is_video: isVideo,
            thumbnail_src: src,
            video_view_count: count,
            taken_at_timestamp: date,
            edge_media_to_caption: {
                edges:
                [
                    {
                        node: { text: caption }
                    },
                ],
            },
        } = edge.node
        console.log(edge.nod)
        return {
            isVideo, src, count, date, caption: minimizeCaption(caption)
        };
    });

};

//Take the relevant data from the response about photos
const minimizePhotosData = (photos) => {
    const { edges } = photos
    if (!edges) {
        throw Error("bad data in photos")
    }
    return edges.map(edge => {
        const {
            edge_media_preview_like: { count },
            thumbnail_src: src,
            is_video: isVideo,
            taken_at_timestamp: date,
            edge_media_to_caption: {
                edges: [
                    {
                        node: { text: caption }
                    },
                ],
            },
        } = edge.node
        return {
            count, src, isVideo, date, caption: minimizeCaption(caption)
        }
    })
}



const getFeedsFromResponse = (response = {}) => {
    const {
        graphql: { user },
    } = response;
    if (!user) {
        throw Error("bad response")
    }
    const {
        edge_felix_video_timeline: videos,
        edge_owner_to_timeline_media: photos,
    } = user

    const minimVideos = minimizeVideosData(videos);
    const minimPhotos = minimizePhotosData(photos);
    //merge the two array to organise by time stamp
    return [...minimVideos, ...minimPhotos].sort((a, b) => { b.time - a.time })

}


export const fetchData = async (username, numberOfFeeds) => {
    let feeds;
    // console.log(await fetch(ENDPOINT.replace(":username", username)));
    try {
        let response = await fetch(ENDPOINT.replace(":username", username));
        console.log("responser", ENDPOINT)
        response = await response.json();

        if (response.type === "cors") {
            console.log("Woops, there has been too many requests, please try again in 1hour")
            const { error } = "Woops, there has been too many requests, please try again in 1hour"
            return error
        }
        // response = JSON.parse(response)
        // response = await response.text()
        console.log("typeof", typeof (response))
        console.log("response", response)

        feeds = getFeedsFromResponse(response);

    } catch (err) {
        console.log("error in fetchdata", err)

    }
    console.log("number ofFeeds", Number(numberOfFeeds));
    if (Number(numberOfFeeds) < feeds.length) {
        feeds = feeds.slice(0, numberOfFeeds);
    }
    return feeds

}