<template>
    <KeyContainer :keyText="privateKey" :isPrivate="true" viewType="options" :blur="true" />
    <Button class="mb-12 mt-12" buttonStyle="primary" buttonSize="xl" @click="$router.push('/start/saveprivatekey')"
        >Export private key</Button
    >
    <p class="text-2xl text-danger font-semibold">
        Warning: Never disclose your private keys. Anyone with your private keys can steal any asset or information held
        in your account.
    </p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';
import KeyContainer from '@/components/KeyContainer.vue';
import RSS3 from '@/common/rss3';

@Options({
    components: {
        Button,
        KeyContainer,
    },
})
export default class StartPrivateKey extends Vue {
    privateKey: string = '';

    async mounted() {
        const rss3 = await RSS3.set();
        if (rss3) {
            this.privateKey = rss3.persona.privateKey;
        }
    }
}
</script>

<style lang="postcss" scoped></style>
