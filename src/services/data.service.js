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

export const fetchData = async (username) => {
    let feeds;
    console.log("username", username)

    let response = await fetch(ENDPOINT.replace(":username", username));
    // console.log(response.json())
    // response = await response.text()
    response = await response.json()
    console.log(response)


    // response = await response.json()    // console.log(response.json())

    feeds = getFeedsFromResponse(response)
    // console.log("response in dataserviceresponse", response)
    console.log("feeds", feeds)


}