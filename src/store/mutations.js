import { FETCH_DATA, SET_CURRENT_USER } from './types'



export default {
    [FETCH_DATA](state, feeds) {
        state.feeds = feeds;
        // console.log("feeds", feeds)
    },
    [SET_CURRENT_USER](state, username) {
        state.currentUser = username;
    }

}