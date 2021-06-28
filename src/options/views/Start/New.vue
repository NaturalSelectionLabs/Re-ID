<template>
    <Button class="mb-15" buttonStyle="primary" buttonSize="xxl" @click="$router.push('/start/privatekey')"
        >Yes, help me set up</Button
    >
    <Button buttonStyle="secondary" buttonSize="xxl" @click="$router.push('/start/login')"
        >No, I’ve got a private key</Button
    >
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';

@Options({
    components: {
        Button,
    },
})
export default class StartNew extends Vue {}
</script>

<style lang="postcss" scoped></style>
