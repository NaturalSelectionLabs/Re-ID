<template>
    <KeyContainer :keyText="privateKey" :isPrivate="true" viewType="options" />
    <Button class="mb-12 mt-12" buttonStyle="primary" buttonSize="xxl" @click="$router.push('/start/address')"
        >I’ve saved my private key</Button
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
        this.privateKey = (await RSS3.get()).persona.privateKey;
    }
}
</script>

<style lang="postcss" scoped></style>
