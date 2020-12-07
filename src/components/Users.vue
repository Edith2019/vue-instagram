<template>
    <div>
        <v-chip
            v-for="user in users"
            class="ma-2"
            :text-color="user === currentUser ? 'white' : 'blue'"
            :color="user === currentUser ? 'blue' : 'white'"
            :key="user"
            @click="fetch_data({ username: user })"
        >
            {{ user }}
        </v-chip>
    </div>
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
