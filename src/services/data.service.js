import { ENDPOINT } from "../consts"

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

        console.log("user.video", videos.user)
        console.log(photos.user)

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


    console.log(Number(numberOfFeeds));


    if (Number(numberOfFeeds) < feeds.length) {
        feeds = feeds.slice(0, numberOfFeeds);
    }

}