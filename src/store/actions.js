import {
    FETCH_DATA,
    SET_CURRENT_USER,
    CHANGE_FILTER,
    START_LOADING,
    STOP_LOADING,
    EMPTY_FEEDS
} from './types'

import { fetchData } from '../services/data.service'


export default {

    async [FETCH_DATA]({ dispatch, commit, state }, payload) {
        try {
            // console.log("payload", payload)
            const { username, numberOfFeeds } = payload.data ? payload.data : payload;
            dispatch({ type: START_LOADING })
            dispatch({ type: SET_CURRENT_USER, username })
            const feeds = await fetchData(username, numberOfFeeds, state.filter)
            // console.log("feeds", feeds)
            commit(FETCH_DATA, feeds)
        }
        catch (err) {
            console.log("error in Action Fetch", err)
            commit(EMPTY_FEEDS)
        } finally {
            dispatch({ type: STOP_LOADING })
        }
    },

    async [SET_CURRENT_USER]({ commit }, { username }) {
        // console.log("setcurrentUser", { commit }, { username })
        commit(SET_CURRENT_USER, username)
    },



    async [START_LOADING]({ commit }) {
        commit(START_LOADING);
    },
    async [STOP_LOADING]({ commit }) {
        commit(STOP_LOADING)
    },
    async [CHANGE_FILTER]({ dispatch, state, commit }, filter) {
        commit(CHANGE_FILTER, filter);
        dispatch({
            type: FETCH_DATA,
            data: {
                username: state.currentUser,
                numberofFeeds: state.currentFeedsNumber
            }
        })
    },



}