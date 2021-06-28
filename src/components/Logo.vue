<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 1024 1024" role="presentation">
        <title lang="en">RE:ID logo</title>
        <g id="Layer_3" data-name="Layer 3">
            <path
                d="M796.8,172.9H580.4c-181,0-327.6,146.7-327.6,327.6h0l.4,146.9.3,102.3-91.7,99.8q154.05.75,308.1,1.4H795c94,0,174-59.8,204.2-143.4.5-1.3.9-2.7,1.4-4,.9-2.6,1.7-5.2,2.5-7.8.5-1.6,1-3.3,1.4-4.9.7-2.6,1.4-5.2,2-7.8v-.1a18.43,18.43,0,0,0,.5-2.5,220.67,220.67,0,0,0,4.8-38c0-.9.1-1.9.1-2.8,0-1.8.1-3.5.1-5.3V388.2C1012,269.3,915.6,172.9,796.8,172.9ZM873.4,572c0-14.4,11.4-26.1,25.5-26.1a24.87,24.87,0,0,1,18,7.6,26.52,26.52,0,0,1,7.5,18.5V686.6a25.72,25.72,0,0,1-25.5,26c-14.1,0-25.5-11.7-25.5-26Z"
                transform="translate(-12.03 -172.9)"
                fill="#5c65f4"
            />
            <path
                d="M148.9,757.9v91.7H57.3c-58.1,0-61.4-87.4-3.4-90.3,1.5-.1,3.1-.1,4.6-.1,0-1.6.1-3.1.1-4.7C61.5,696.5,148.9,699.8,148.9,757.9Z"
                transform="translate(-12.03 -172.9)"
                fill="#f55d66"
            />
        </g>
    </svg>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        width: {
            type: Number,
            default: 256,
        },
        height: {
            type: Number,
            default: 256,
        },
    },
})
export default class Logo extends Vue {}
</script>

<style lang="postcss" scoped>
@layer components {
    .cls-1 {
        @apply fill-current text-primary;
    }
    .cls-2 {
        @apply fill-current text-secondary;
    }
}
</style>
