import {
    FETCH_DATA,
    SET_CURRENT_USER
} from './types'

import { fetchData } from '../services/data.service'


export default {
    async [FETCH_DATA]({ dispatch, commit }, payload) {
        console.log("payload", payload)
        const { username, numberOfFeeds } = payload.data ? payload.data : payload;
        dispatch({ type: SET_CURRENT_USER, username })
        const feeds = await fetchData(username, numberOfFeeds)
        commit(FETCH_DATA, feeds)
    },
    async [SET_CURRENT_USER]({ commit }, { username }) {
        console.log("setcurrentUser", { commit }, { username })
        commit(SET_CURRENT_USER, username)
    }




}