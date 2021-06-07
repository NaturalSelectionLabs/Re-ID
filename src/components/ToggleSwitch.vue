<template>
    <div
        class="toggleSwitch"
        :class="{ active: currentState }"
        v-if="!disabled"
        v-on:click="switchState"
    >
        <div class="switchHandle"></div>
        <div class="switchButton"></div>
    </div>
</template>

<script lang="ts">
import { Vue, Options, setup } from 'vue-class-component';
@Options({
    props: {
        disabled: Boolean,
        defaultState: Boolean,
    },
})
export default class ToggleSwitch extends Vue {
    disabled: Boolean = false;
    defaultState: Boolean = true;

    currentState = this.defaultState;

    switchState() {
        this.currentState = !this.currentState;
    }
}
</script>

<style scoped lang="postcss">
@layer components {
    .toggleSwitch {
        @apply bg-black w-5 h-4;
        .active {
            @apply bg-success;
        }
    }

    .switchButton {
        @apply bg-opacity-100 absolute block w-4 h-4;
    }

    .switchHandle {
        @apply bg-opacity-43 inline-block w-5 h-1 rounded-sm;
    }
}
</style>
