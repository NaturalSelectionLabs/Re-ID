<template>
    <h1>Hi</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import RSS3 from '@/common/rss3';

@Options({
    components: {},
})
export default class Entry extends Vue {
    async mounted() {
        const rss3 = await RSS3.get();
        if (!rss3) {
            this.$router.push('/start');
        } else {
            this.$router.push('/home');
        }
    }
}
</script>

<style lang="postcss" scoped></style>
