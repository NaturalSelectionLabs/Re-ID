<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import RSS3 from '@/common/rss3';

@Options({
    components: {},
})
export default class App extends Vue {
    async mounted() {
        const rss3 = await RSS3.get();
    }
}
</script>

<style></style>
