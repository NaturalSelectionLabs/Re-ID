<template>
    <div class="popupContainer"><slot /></div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class popupContainer extends Vue {}
</script>

<style lang="postcss">
/* modal */
@layer components {
    .popupContainer {
        @apply w-65 h-105 px-5 pt-8 pb-15 rounded-lg bg-white backdrop-filter backdrop-blur;
    }
}
</style>
