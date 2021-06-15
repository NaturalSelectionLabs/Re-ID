<template>
    <p class="flex justify-between">
        <Button buttonStyle="primary" buttonSize="xl" @click="save()">Save and continue</Button>
        <Button buttonStyle="secondary" buttonSize="xl" @click="$router.push('/start/congrats')">Skip for now</Button>
    </p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';

@Options({
    components: {
        Button,
    },
})
export default class StartProfile extends Vue {}
</script>

<style lang="postcss" scoped></style>
