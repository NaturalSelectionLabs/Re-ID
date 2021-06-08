<template>
    <div
        class="toggle-switch"
        :class="{ active: currentState }"
        v-if="!disabled"
        @click="switchState"
    >
        <div class="switch-button" />
    </div>
</template>

<script lang="ts">
import { Vue, Options, setup } from 'vue-class-component';

@Options({
    props: {
        disabled: Boolean,
    },
    mounted() {
        this.initState();
    },
})
export default class ToggleSwitch extends Vue {
    disabled: Boolean = false;
    currentState = true;

    switchState(): void {
        this.currentState = !this.currentState;
        chrome.storage.sync.set({
            'reid-twitter-sync-enabled': this.currentState,
        });
    }

    initState(): void {
        chrome.storage.sync.get(['reid-twitter-sync-enabled'], (result) => {
            const enabled = result['reid-twitter-sync-enabled'];
            if (typeof enabled !== 'undefined') {
                this.currentState = enabled;
            }
        });
    }
}
</script>

<style scoped lang="postcss">
@layer components {
    .toggle-switch {
        @apply bg-black w-10 h-5 rounded-lg relative;

        &.active {
            @apply bg-success;

            > .switch-button {
                @apply left-auto right-0.5;
            }
        }

        > .switch-button {
            @apply absolute bg-white block w-4 h-4 rounded-lg top-0.5 left-0.5 right-auto;
        }
    }
}
</style>
