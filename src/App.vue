<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title color="primary"> Vue Instagram </v-toolbar-title>
        </v-app-bar>

        <v-main>
            <Main />
        </v-main>
    </v-app>
</template>

<script>
import Main from "./components/Main";

export default {
    name: "App",

    components: {
        Main,
    },

    data: () => ({
        //
    }),
};
</script>
