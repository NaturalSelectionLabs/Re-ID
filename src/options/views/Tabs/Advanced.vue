<template>
    <div class="advanced">
        <div class="editor"></div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class TabsAdvanced extends Vue {}
</script>

<style lang="postcss" scoped>
@layer components {
    .advanced {
        @apply mt-24;
    }
}
</style>
