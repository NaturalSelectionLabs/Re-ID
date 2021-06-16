<template>
    <div class="tooltip" :class="[viewType === 'popup' ? 'font-xs' : 'font-sm', marginLeftClass]">
        <span class="tooltipText" :class="[widthClass, heightClass]">{{ text }}</span>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        text: String,
        heightClass: String,
        widthClass: String,
        marginLeftClass: String,
        viewType: String,
    },
})
export default class Tooltip extends Vue {
    text!: String;
    heightClass!: String;
    widthClass!: String;
    marginLeftClass!: String;
    viewType!: String;
}
</script>

<style lang="postcss">
/* modal */
@layer components {
    .tooltip {
        @apply relative inline-block w-0 h-0;
    }

    .tooltipText {
        @apply absolute top-3/2 left-1/2 rounded-sm px-2 py-1 bg-secondary text-black font-normal;
    }

    .tooltip .tooltipText::after {
        content: '';
        @apply absolute bottom-full left-1/2 -ml-1.5 border-6 border-solid;
        border-color: transparent transparent #e7e8fe transparent;
    }
}
</style>
