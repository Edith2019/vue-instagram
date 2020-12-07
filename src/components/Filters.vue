<template>
    <div>
        <v-chip class="ma-2">
            <v-avatar left>
                <v-icon>mdi-filter</v-icon>
            </v-avatar>
        </v-chip>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { CHANGE_FILTER } from "../store/types";
import { USERS, FILTER_METHOD } from "../consts";

export default {
    name: "Filters",
    data() {
        return {
            users: USERS,
        };
    },
    computed: {
        filters: function() {
            return Object.keys(FILTER_METHOD);
        },
        ...mapGetters(["currentFilter"]),
    },
    methods: {
        ...mapActions([CHANGE_FILTER]),
    },
};
</script>
