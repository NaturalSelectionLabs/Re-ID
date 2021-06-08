<template>
    <BothSides> </BothSides>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BothSides from '@/options/layout/BothSides.vue';

@Options({
    components: { BothSides },
})
export default class Home extends Vue {}
</script>

<style lang="postcss" scoped></style>
