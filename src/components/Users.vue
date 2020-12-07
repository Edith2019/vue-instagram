<template>
    <v-container>
        <p>Select the user you want to see the feed</p>
        <v-chip
            v-for="user in users"
            class="ma-2"
            :key="user"
            @click="fetch_data({ username: user })"
        >
            {{ user }}
        </v-chip>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { USERS } from "../consts";
import { FETCH_DATA } from "../store/types";
export default {
    name: "Users",
    data() {
        return {
            users: USERS,
        };
    },
    computed: {
        ...mapGetters(["currentUser"]),
    },

    methods: {
        ...mapActions([FETCH_DATA]),
    },
};
</script>
