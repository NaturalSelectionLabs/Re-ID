<template>
    <div class="home">
        <ItemList view-type="options">
            <SingleItem
                v-for="item in rss3items"
                view-type="options"
                :rss3-item="item"
            />
        </ItemList>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ItemList from '@/components/ItemList.vue';
import SingleItem from '@/components/SingleItem.vue';

@Options({
    components: {
        SingleItem,
        ItemList,
    },
})
export default class TabsHome extends Vue {
    rss3items = [
        {
            id: '0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-item-1',
            authors: ['0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944'],
            summary: 'Yes!!',
            date_published: '2021-05-09T16:56:35.529Z',
            date_modified: '2021-05-09T16:56:35.529Z',

            type: 'comment',
            upstream: '0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-item-0',
        },
        {
            id: '0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-item-0',
            authors: ['0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944'],
            title: 'Hello World',
            summary: 'Hello, this is the first item of RSS3.',
            date_published: '2021-05-08T16:56:35.529Z',
            date_modified: '2021-05-08T16:56:35.529Z',

            contents: [
                {
                    file: [
                        'dweb://never.html',
                        'https://example.com/never.html',
                    ],
                    mime_type: 'text/html',
                },
                {
                    file: ['dweb://never.jpg'],
                    mime_type: 'image/jpeg',
                },
            ],

            contexts: [
                {
                    type: 'comment',
                    list: ['0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-item-1'],
                },
                {
                    type: 'like',
                    list: [],
                },
            ],
        },
    ];
}
</script>

<style lang="postcss" scoped>
@layer components {
    .home {
        @apply mt-8;
    }
}
</style>
