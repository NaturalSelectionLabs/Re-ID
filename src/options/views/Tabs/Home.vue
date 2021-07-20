<template>
    <div class="home">
        <ItemList view-type="options">
            <SingleItem v-for="(item, idx) in rss3items" view-type="options" :rss3-item="item" :key="idx" />
        </ItemList>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ItemList from '@/components/ItemList.vue';
import SingleItem from '@/components/SingleItem.vue';
import RSS3 from '@/common/rss3';
import { RSS3Item, RSS3Items } from 'rss3/types/rss3';

@Options({
    components: {
        SingleItem,
        ItemList,
    },
})
export default class TabsHome extends Vue {
    rss3items: RSS3Item[] = [];
    rss3itemsNext: string | undefined;

    async mounted() {
        const rss3 = await RSS3.get();
        if (!rss3) {
            this.$router.push('/start');
        } else {
            const list1 = await rss3.items.get();
            this.rss3items = list1.items;
            this.rss3itemsNext = list1.items_next;
        }
    }
}
</script>

<style lang="postcss" scoped></style>
