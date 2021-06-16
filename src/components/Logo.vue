<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 1024 1024" role="presentation">
        <title lang="en">RE:ID logo</title>
        <g id="Layer_3" data-name="Layer 3">
            <path
                class="cls-1"
                d="M796.76,172.93H580.42c-180.95,0-327.63,146.69-327.63,327.64h0l.39,146.94q.13,51.16.27,102.34-45.85,49.88-91.74,99.81,154,.68,308.07,1.41H795c94,0,174-59.78,204.17-143.39.48-1.33.94-2.66,1.4-4,.87-2.59,1.71-5.22,2.49-7.85.48-1.63.95-3.28,1.39-4.92.7-2.59,1.36-5.19,2-7.82,0,0,0-.08,0-.13.19-.81.37-1.63.55-2.45a218.17,218.17,0,0,0,4.8-38c0-.94.06-1.86.09-2.79.05-1.78.07-3.55.07-5.34V388.18C1012,269.3,915.62,172.93,796.76,172.93ZM873.37,572c0-14.42,11.41-26.07,25.48-26.07a25.06,25.06,0,0,1,18,7.62A26.27,26.27,0,0,1,924.3,572V686.63c0,14.36-11.39,26-25.45,26s-25.48-11.66-25.48-26Z"
            />
            <path
                class="cls-2"
                d="M148.92,757.92V849.6H57.27c-58.07,0-61.41-87.4-3.44-90.35,1.53-.07,3.08-.1,4.64-.1,0-1.56.07-3.11.13-4.67C61.55,696.51,148.92,699.85,148.92,757.92Z"
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
