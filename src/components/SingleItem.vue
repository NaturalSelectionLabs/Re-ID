<template>
    <div
        class="itemContainer"
        :class="{
            'item-popup': viewType === 'popup',
            'item-options': viewType === 'options',
        }"
    >
        <div v-if="rss3Item.title" class="title font-semibold mb-1">{{ rss3Item.title }}</div>
        <div v-if="rss3Item.summary" class="font-normal mb-1">{{ rss3Item.summary }}</div>
        <div v-if="rss3Item.contents" class="font-normal flex gap-1 mb-1">
            <div class="eachContent flex-1" v-for="(each, index) in rss3Item.contents" :key="index">
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
        <div class="status text-gray-text text-opacity-60">
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
        @apply flex flex-col py-2;
    }

    .item-popup {
        @apply text-xs;
    }

    .item-options {
        @apply text-lg;
    }

    .img-popup {
        @apply h-31;
    }

    .img-options {
        @apply h-101;
    }
}
</style>
