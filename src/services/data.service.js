import { ENDPOINT, MAX_CAPTION_LENGTH } from "../consts"


// Display 150 Char and replace the rest by...
const minimizeCaption = (caption) => {
    const length = caption.lenght;
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
            is_videao: isVideo,
            thumbail_src: src,
            edge__media_preview_like: count,
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
            edge_liked_by: { count },
            thumbnail_src: src,
            id_video: isVideo,
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
    } else {
        const {
            edge_felix_video_timeline: videos,
            edge_owner_to_timeline_media: photos,
        } = user

        const minimVideos = minimizeVideosData(videos);
        const minimPhotos = minimizePhotosData(photos);
        //merge the two array to organise by time stamp
        return [...minimVideos, ...minimPhotos].sort((a, b) => { b.time - a.time })
    }
}


export const fetchData = async (username, numberOfFeeds) => {
    let feeds;
    let response = await fetch(ENDPOINT.replace(":username", username));
    console.log(ENDPOINT.replace(":username", username));

    response = await response.json();
    // response = JSON.parse(response)
    // response = await response.text()
    console.log("typeof", typeof (response))
    console.log("response", response)

    feeds = getFeedsFromResponse(response);

    console.log("number ofFeeds", Number(numberOfFeeds));
    if (Number(numberOfFeeds) < feeds.length) {
        feeds = feeds.slice(0, numberOfFeeds);
    }
    return feeds

}