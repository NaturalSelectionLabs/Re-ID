<template>
    <KeyContainer :keyText="address" viewType="options" />
    <Button class="mb-12 mt-12" buttonStyle="primary" buttonSize="xxl" @click="$router.push('/start/pending')"
        >Continue</Button
    >
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
    address: string = '';

    async mounted() {
        this.address = (await RSS3.get()).persona.id;
    }
}
</script>

<style lang="postcss" scoped></style>
