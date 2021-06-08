<template>
    <div
        class="toggle-switch"
        :class="{ active: currentState }"
        v-if="!$props.disabled"
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
        defaultState: Boolean,
    },
    computed() {
        this.currentState = this.$props.defaultState;
    },
})
export default class ToggleSwitch extends Vue {
    currentState: Boolean = true;

    switchState(): void {
        this.currentState = !this.currentState;
        this.$emit('toggleStatus', this.currentState);
    }
}
</script>

<style scoped lang="postcss">
@layer components {
    .toggle-switch {
        @apply bg-black w-9 h-5 rounded-lg relative;

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
