<template>
    <v-container id="main" fluid>
        <Users />
        <!-- <Filters /> -->
        <Search />
    </v-container>
</template>

<script>
import Users from "./Users";
// import Filters from "./Filters";
import Search from "./Search";

export default {
    name: "Main",
    components: {
        Users,
        // Filters,
        Search,
    },

    data: () => ({}),
};
</script>
