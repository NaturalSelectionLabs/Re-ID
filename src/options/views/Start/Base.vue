<template>
    <div class="start">
        Base
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class Advanced extends Vue {}
</script>

<style lang="postcss" scoped></style>