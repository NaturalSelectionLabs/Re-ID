<template>
    <div
        class="itemContainer"
        :class="{
            'item-popup': viewType === 'popup',
            'item-options': viewType === 'options',
        }"
    >
        <div class="title">{{ rss3Item.title }}</div>
        <div class="summary">{{ rss3Item.summary }}</div>
        <div class="content">
            <!-- TODO -->
        </div>
        <div class="status">
            <div class="like-comment">
                <!-- TODO -->
            </div>
            <div class="timestamp">{{ rss3Item.date_published }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
@Options({
    props: {
        viewType: String,
        rss3Item: Object,
    },
})
export default class SingleItem extends Vue {
    viewType?: String;
    rss3Item?: Object;
}
</script>

<style scoped lang="postcss">
@layer components {
    .itemContainer {
        height: max-content;
        @apply flex flex-col;
        .title {
            @apply font-semibold;
        }
        .summary {
            @apply font-normal;
        }
        .content {
            @apply font-normal;
            img {
                @apply object-contain;
            }
        }
        .status {
            @apply flex flex-row justify-between text-gray-text text-opacity-60;
        }
    }

    .item-popup {
        @apply w-55 text-xs;
    }

    .item-options {
        @apply w-180 text-lg;
    }
}
</style>
