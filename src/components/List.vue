<template>
    <v-container>
        <v-row no-gutters>
            <!-- <slot
                v-if="!feeds.length"
                cols="12"
                class="d-flex justify-end mb-12"
            >
                <v-col cols="12">
                    <NoData></NoData>
                </v-col>
            </slot> -->

            <v-col cols="12" class="d-flex justify-end mb-12">
                <Filters></Filters>
            </v-col>
            <slot>
                <v-col
                    v-for="feed in feeds"
                    :key="feed.src"
                    cols="12"
                    xl="2"
                    lg="3"
                    md="4"
                    sm="6"
                    xs="12"
                >
                    <v-card class="pa-2" flat tile>
                        <ListItem :item="feed"></ListItem>
                    </v-card>
                </v-col>
            </slot>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";
// import NoData from "./NoData";
import ListItem from "./ListItem";
import Filters from "./Filters";

export default {
    name: "List",
    computed: {
        ...mapGetters(["feeds"]),
    },
    components: {
        ListItem,
        // NoData,
        Filters,
    },
};
</script>
