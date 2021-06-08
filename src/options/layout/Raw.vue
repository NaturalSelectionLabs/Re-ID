<template>
    <div class="main">
        <slot />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class Raw extends Vue {}
</script>

<style lang="postcss" scoped></style>
