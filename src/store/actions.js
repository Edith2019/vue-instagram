import {
    FETCH_DATA
} from './types'

import { fetchData } from '../services/data.service'

export default {
    async [FETCH_DATA](
        // { commit, state, dispatch }, 
        payload) {
        console.log("something", payload)
        console.log(fetchData())

    }


}