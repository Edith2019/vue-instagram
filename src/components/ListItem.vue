<template>
    <v-container>
        <v-card
            v-if="item"
            class="mx-auto my-12"
            max-width="374"
            min-height="450"
        >
            <v-img height="250" :src="item.src"></v-img>

            <v-card-title>
                <div v-if="item.isVideo">
                    <v-chip class="ma-2" color="blue" text-color="black">
                        <v-icon>
                            mdi-video
                        </v-icon>
                        {{ item.count }} views
                    </v-chip>
                </div>
                <div v-else>
                    <v-chip class="ma-2" color="pink">
                        <v-icon>mdi-img</v-icon>{{ item.count }} likes
                    </v-chip>
                </div>
            </v-card-title>
            <v-card-text>
                <div class="desc">{{ item.caption }}</div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    Name: "ListItem",
    props: {
        item: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>
