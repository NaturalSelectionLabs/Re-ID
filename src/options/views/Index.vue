<template>
    <h1>Hi</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import RSS3 from '@/common/rss3';
import reidInvite from '@/common/invite';

@Options({
    components: {},
})
export default class Entry extends Vue {
    async mounted() {
        const rss3 = await RSS3.get();
        if (!rss3) {
            this.$router.push('/start');
        } else {
            if (await reidInvite.check(rss3.persona.id)) {
                this.$router.push('/home');
            } else {
                this.$router.push('/start/address');
            }
        }
    }
}
</script>

<style lang="postcss" scoped></style>
