import {
    FETCH_DATA,
    SET_CURRENT_USER
} from './types'

import { fetchData } from '../services/data.service'


export default {
    async [FETCH_DATA]({ dispatch, commit },
        payload) {
        console.log("something", payload)
        const { username } = payload.data ? payload.data : payload;
        console.log("username", username)
        dispatch({ type: SET_CURRENT_USER, username })
        const userN = await fetchData(username)
        commit(FETCH_DATA, userN)
        // const feed = await fetchData(username)
    },

    async [SET_CURRENT_USER]({ commit }, { username }) {
        console.log(username)
        commit({ type: SET_CURRENT_USER, username })
        console.log("username", commit({ type: SET_CURRENT_USER, username }))
    }




}