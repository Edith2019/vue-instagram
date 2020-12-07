import { CHANGE_FILTER, FETCH_DATA, SET_CURRENT_USER } from './types'



export default {
    [FETCH_DATA](state, feeds) {
        state.feeds = feeds;
        state.currentFeedsNumber = feeds.length
    },
    [SET_CURRENT_USER](state, username) {
        state.currentUser = username;
    },
    [CHANGE_FILTER](state, filter) {
        state.filter = filter
    }

}