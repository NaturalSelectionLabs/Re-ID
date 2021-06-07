<template>
    <popup-container>
        <h1>Re: ID</h1>
        <toggle-switch />
    </popup-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import PopupContainer from '@/components/PopupContainer.vue';

@Options({
    components: { PopupContainer, ToggleSwitch },
})
export default class App extends Vue {}
</script>

<style lang="postcss">
@layer components {
    .popupContainer {
        @apply w-65 h-105 rounded-lg bg-white backdrop-filter backdrop-blur;
    }
}
</style>
