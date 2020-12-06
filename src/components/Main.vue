<template>
    <v-container id="main" fluid>
        <Users />
        <!-- <Filters /> -->
        <Search />
        <List />
    </v-container>
</template>

<script>
import Users from "./Users";
// import Filters from "./Filters";
import { mapActions } from "vuex";
import Search from "./Search";
import List from "./List";
import { DEFAULT_USER } from "../consts";
import { FETCH_DATA } from "../store/types";

export default {
    name: "Main",
    mounted() {
        this.fetch_data({ username: DEFAULT_USER });
    },
    components: {
        Users,
        // Filters,
        Search,
        List,
    },
    methods: {
        ...mapActions([FETCH_DATA]),
    },
};
</script>
