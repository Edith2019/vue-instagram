<template>
    <v-container>
        <p>Select the user you want to see the feed</p>
        <v-chip
            v-for="user in users"
            :key="user"
            @click="fetch_data({ username: user })"
        >
            {{ user }}
        </v-chip>
    </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { USERS } from "../consts";
import { FETCH_DATA } from "../store/types";
export default {
    name: "Users",
    data() {
        return {
            users: USERS,
        };
    },
    methods: {
        ...mapActions([FETCH_DATA]),
    },
};
</script>
