<template>
    <v-container>
        <div v-for="feed in feeds" :key="feed.src"></div>
        <ListItem :item="feed" />
    </v-container>
</template>

//
<script>
import { mapGetters } from "vuex";

import ListItem from "./ListItem";

export default {
    name: "List",

    computed: {
        ...mapGetters(["feeds"]),
    },
    components: {
        ListItem,
    },
};
</script>
