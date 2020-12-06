import { ENDPOINT, MAX_CAPTION_LENGTH } from "../consts"



const minimizeCaption = (caption) => {
    console.log("caption", caption)
    const length = caption.lenght;
    console.log("text", length)
    return length > MAX_CAPTION_LENGTH ? `${caption.substring(0, MAX_CAPTION_LENGTH)}...` : caption;
}

console.log(minimizeCaption)

const minimizeVideosData = (videos) => {
    const { edges } = videos
    console.log("edges in video", edges)
    if (!edges) {
        throw Error('bad data in minimizeVideo')
    }
    return edges.map((edge) => {
        const {
            is_videao: isVideo,
            thumbail_src: src,
            edge__media_preview_like: { count },
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

console.log(minimizeVideosData)
const getFeedsFromResponse = (response = {}) => {
    const {
        graphql: { user },
    } = response;


    console.log("response graphql", response)

    if (!user) {
        throw Error("bad response")
    } else {
        const {
            edge_felix_video_timeline: videos,
            edge_owner_to_timeline_media: photos,
        } = user

        console.log("user.video", videos)
        console.log(photos.user)

        console.log("user", user)




    }
}

// console.log("getFeedfromrepsonse", getFeedsFromResponse)

export const fetchData = async (username, numberOfFeeds) => {
    let feeds;
    console.log("username", username)

    let response = await fetch(ENDPOINT.replace(":username", username));
    console.log(ENDPOINT.replace(":username", username));

    response = await response.json();
    console.log("responser", response)
    feeds = getFeedsFromResponse(response);

    console.log("feeds", feeds)
    console.log("number ofFeeds", Number(numberOfFeeds));


    if (Number(numberOfFeeds) < feeds.length) {
        feeds = feeds.slice(0, numberOfFeeds);
    }
    return feeds

}