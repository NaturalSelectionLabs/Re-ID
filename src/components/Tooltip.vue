<template>
    <span
        class="tooltip"
        :class="[
            viewType === 'popup' ? 'font-xs' : 'font-sm',
            marginLeftClass,
            widthClass,
            heightClass,
            !widthClass && !heightClass ? 'whitespace-nowrap' : '',
        ]"
        >{{ text }}</span
    >
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
        @apply absolute transform -translate-x-1/2 inline-block top-3/2 left-1/2 rounded-sm px-2 py-1 bg-secondary text-black font-normal;
        top: calc(100% + 12px);
    }

    .tooltip::after {
        content: '';
        @apply absolute bottom-full left-1/2 -ml-1.5 border-6 border-solid;
        border-color: transparent transparent #e7e8fe transparent;
    }
}
</style>
