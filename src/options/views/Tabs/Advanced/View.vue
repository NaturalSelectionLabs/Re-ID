<template>
    <textarea disabled> </textarea>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class TabsAdvancedView extends Vue {}
</script>
<style lang="postcss" scoped>
@layer components {
    textarea {
        @apply w-180 h-160;
    }
}
</style>
