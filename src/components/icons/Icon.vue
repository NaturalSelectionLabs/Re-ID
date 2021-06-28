<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        viewBox="0 0 18 18"
        :aria-labelledby="iconName"
        role="presentation"
    >
        <title :id="iconName" lang="en">{{ iconName }} icon</title>
        <g :fill="iconColor">
            <slot />
        </g>
    </svg>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        iconName: String,
        width: {
            type: Number,
            default: 18,
        },
        height: {
            type: Number,
            default: 18,
        },
        iconColor: {
            type: String,
            default: 'white',
        },
    },
})
export default class Icon extends Vue {}
</script>
