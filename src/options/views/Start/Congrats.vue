<template>
    <Button buttonStyle="primary" buttonSize="xl" @click="$router.push('/home')">Start to explore</Button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';

@Options({
    components: {
        Button,
    },
})
export default class StartCongrates extends Vue {}
</script>

<style lang="postcss" scoped></style>
