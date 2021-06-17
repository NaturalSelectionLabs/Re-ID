<template>
    <textarea disabled v-model="rawData" />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import RSS3 from '@/common/rss3';

@Options({})
export default class TabsAdvancedView extends Vue {
    rawData: string = '';

    async mounted() {
        const rss3 = await RSS3.get();
        const rawPersona = await rss3?.persona.raw();
        this.rawData = JSON.stringify(rawPersona, null, 4);
    }
}
</script>
<style lang="postcss" scoped>
@layer components {
    textarea {
        @apply w-180 h-160;
    }
}
</style>
