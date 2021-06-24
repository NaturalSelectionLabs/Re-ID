<template>
    <KeyContainer :keyText="address" viewType="options" />
    <Button class="mb-12 mt-12" buttonStyle="primary" buttonSize="xxl" @click="next()">Continue</Button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';
import KeyContainer from '@/components/KeyContainer.vue';
import RSS3 from '@/common/rss3';
import reidInvite from '@/common/invite';

@Options({
    components: {
        Button,
        KeyContainer,
    },
})
export default class StartPrivateKey extends Vue {
    address: string = '';

    async mounted() {
        const rss3 = await RSS3.get();
        if (rss3) {
            this.address = rss3.persona.id;
        }
    }

    async next() {
        const rss3 = await RSS3.get();
        if (rss3 && (await reidInvite.check(rss3.persona.id))) {
            this.$router.push('/start/profile');
        } else {
            alert('Sorry, you are not invited yet.');
        }
    }
}
</script>

<style lang="postcss" scoped></style>
