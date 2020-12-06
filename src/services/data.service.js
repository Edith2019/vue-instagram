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

        console.log(videos.user)
        console.log(photos.user)

    }
}

console.log("getFeedfromrepsonse", getFeedsFromResponse)

export const fetchData = async (username) => {

    let response = await fetch(ENDPOINT.replace(':username', username))
    console.log("username", username)

    response = await response.json()
    console.log("response in dataserviceresponse", response)


}