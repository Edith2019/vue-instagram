<template>
    <v-container>
        <slot v-if="!feeds.length" cols="12" class="d-flex justify-end mb-12">
            <v-col cols="m-12">
                <NoData></NoData>
            </v-col>
        </slot>
        <slot v-else>
            <v-col cols="12" class="d-flex justify-end mb-12">
                <div v-for="feed in feeds" :key="feed.src"></div>
                <ListItem :item="feed"> </ListItem>
            </v-col>
        </slot>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import NoData from "./NoData";
import ListItem from "./ListItem";

export default {
    name: "List",
    computed: {
        ...mapGetters(["feeds"]),
    },
    components: {
        ListItem,
        NoData,
    },
};
</script>
