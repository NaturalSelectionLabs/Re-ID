<template>
    <div
        class="itemList"
        :class="{
            'itemList-popup': viewType === 'popup',
            'itemList-options': viewType === 'options',
        }"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        viewType: String,
    },
})
export default class CollapseMenu extends Vue {}
</script>

<style lang="postcss">
@layer components {
    .itemList {
        @apply flex flex-col divide-y divide-black divide-opacity-10;
    }
    .itemList-popup {
        @apply w-55;
    }

    .itemList-options {
        @apply w-180;
    }
}
</style>
