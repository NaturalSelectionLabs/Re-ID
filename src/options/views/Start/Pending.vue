<template>
    <KeyContainer :keyText="address" viewType="options" />
    <p class="flex justify-between mt-12">
        <Button buttonStyle="primary" buttonSize="xl" @click="next()">Continue</Button>
        <Button buttonStyle="secondary" buttonSize="xl" @click="tweetForInvitation">Ask on Twitter</Button>
    </p>
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
        if (rss3 && (await reidInvite.invite.check(rss3.persona.id))) {
            this.$router.push('/start/profile');
        } else {
            alert('Sorry, you are not invited yet.');
        }
    }
    tweetForInvitation() {
        window.open(
            `https://twitter.com/intent/tweet?hashtags=REID,REIDinvitation&text=Looking%20for%20an%20invitation!%20My%20address:%20${this.address}`,
            '_blank',
        );
    }
}
</script>

<style lang="postcss" scoped></style>
