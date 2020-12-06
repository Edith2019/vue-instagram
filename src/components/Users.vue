<template>
    <v-container>
        <p>Select the user you want to see the feed</p>
        <v-chip v-for="user in users" :key="user">
            {{ user }}
        </v-chip>
    </v-container>
</template>

<script>
import { USERS } from "../consts";
export default {
    name: "Users",
    data() {
        return {
            users: USERS,
        };
    },
};
</script>
