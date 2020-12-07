<template>
    <v-container>
        <v-form ref="form">
            <v-text-field
                v-model="username"
                label="Username"
                required
            ></v-text-field>
            <v-text-field
                v-model="numberOfFeeds"
                label="Number of Feeds"
            ></v-text-field>
        </v-form>
        <v-btn @click="getFeeds" color="blue" class="white--text">
            <v-icon left dark>mdi-instagram</v-icon>
            Get Feeds</v-btn
        >
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { FETCH_DATA } from "../store/types";

export default {
    Name: "Search",
    data: () => ({
        valid: true,
        username: null,
        numberOfFeeds: null,
    }),
    computed: {
        ...mapGetters(["currentUser", "currentFeedsNumber"]),
    },
    methods: {
        ...mapActions([FETCH_DATA]),
        getFeeds() {
            this.fetch_data({
                username: this.username,
                numberOfFeeds: this.numberOfFeeds,
            });
        },
    },
    watch: {
        currentUser: function(val) {
            this.username = val;
        },
        currentFeedsNumber: function(val) {
            this.numberOfFeeds = val;
        },
    },
};
</script>
