<template>
    <div>
        <v-chip
            v-for="filter in filters"
            class="ma-2"
            :key="filter"
            :text-color="filter === currentFilter ? 'white' : 'blue'"
            :color="filter === currentFilter ? 'blue' : 'white'"
            @click="change_filter(filter)"
        >
            <v-avatar left>
                <v-icon>mdi-filter</v-icon>
            </v-avatar>
            {{ filter }}
        </v-chip>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { CHANGE_FILTER } from "../store/types";
import { USERS, FILTER_METHODS } from "../consts";

export default {
    name: "Filters",
    data() {
        return {
            users: USERS,
        };
    },
    computed: {
        filters: function() {
            return Object.keys(FILTER_METHODS);
        },
        ...mapGetters(["currentFilter"]),
    },
    methods: {
        ...mapActions([CHANGE_FILTER]),
    },
};
</script>
