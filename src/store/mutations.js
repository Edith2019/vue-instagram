import { FETCH_DATA, SET_CURRENT_USER, CHANGE_FILTER, START_LOADING, STOP_LOADING } from './types'



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
    },
    [START_LOADING](state) {
        state.loading = true;
    },
    [STOP_LOADING](state) {
        state.loading = false;
    }

}