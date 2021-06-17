<template>
    <div
        class="itemContainer"
        :class="{
            'item-popup': viewType === 'popup',
            'item-options': viewType === 'options',
        }"
    >
        <div v-if="rss3Item.title" class="title font-semibold">{{ rss3Item.title }}</div>
        <div v-if="rss3Item.summary" class="summary font-normal">{{ rss3Item.summary }}</div>
        <div v-if="rss3Item.contents" class="content font-normal">
            <div class="eachContent" v-for="(each, index) in rss3Item.contents" :key="index">
                <img
                    v-if="each.mime_type.startsWith('image')"
                    :class="['object-cover', 'rounded', viewType === 'popup' ? 'img-popup' : 'img-options']"
                    :src="each.address[0]"
                />
                <p>
                    <a v-if="each.mime_type.startsWith('text')" :href="each.address[0]">{{ each.address[0] }}</a>
                </p>
            </div>
            <!-- TODO -->
        </div>
        <div class="status grid grid-cols-context w-55 text-gray-text text-opacity-60">
            <div class="like-comment">
                <!-- TODO -->
            </div>
            <div class="timestamp justify-end">{{ rss3Item.date_published }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import moment from 'moment';
@Options({
    props: {
        viewType: String,
        rss3Item: Object,
    },
})
export default class SingleItem extends Vue {
    viewType?: String;
    rss3Item?: Object;

    formatDate(date: string) {
        return moment(date).calendar({
            sameDay: 'LT',
            nextDay: '',
            nextWeek: '',
            lastDay: '[Yesterday] LT',
            lastWeek: 'DD/MM/YYYY LT',
            sameElse: 'DD/MM/YYYY LT',
        });
    }
}
</script>

<style scoped lang="postcss">
@layer components {
    .itemContainer {
        /* height: max-content; */
        @apply flex flex-col;
    }

    .item-popup {
        @apply w-55 text-xs;
    }

    .item-options {
        @apply w-180 text-lg;
    }

    .img-popup {
        @apply w-55 h-31;
    }

    .img-options {
        @apply w-180 h-101;
    }
}
</style>
