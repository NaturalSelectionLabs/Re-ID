<template>
    <h1>RE:ID</h1>
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
            await this.$router.push('/onboarding');
        } else {
            await this.$router.push('/home');
        }
    }
}
</script>

<style scoped lang="postcss"></style>
