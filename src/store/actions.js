import {
    FETCH_DATA,
    SET_CURRENT_USER
} from './types'

import { fetchData } from '../services/data.service'


export default {
    async [FETCH_DATA]({ dispatch },
        payload) {
        console.log("something", payload)
        const { username } = payload.data ? payload.data : payload;
        console.log(fetchData())
        dispatch({ type: SET_CURRENT_USER, username })


    },

    async [SET_CURRENT_USER]({ commit }, { username }) {
        commit({ type: SET_CURRENT_USER, username })
        console.log("username", commit({ type: SET_CURRENT_USER, username }))
    }




}