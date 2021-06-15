<template>
    <div class="popupContainer"><slot /></div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class PopupContainer extends Vue {}
</script>

<style lang="postcss">
/* modal */
@layer components {
    .popupContainer {
        @apply grid grid-rows-popup w-65 h-105 px-5 pt-5 pb-8 rounded-lg bg-white backdrop-filter backdrop-blur;
    }
}
</style>
