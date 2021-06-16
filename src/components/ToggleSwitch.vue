<template>
    <div class="toggleSwitch" v-if="!disabled" v-on:click="switchState">
        <div class="switchHandle" :class="{ active: $props.defaultState }"></div>
        <div
            class="switchButton"
            :class="{ active: $props.defaultState, switchButton_active: $props.defaultState }"
        ></div>
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
    switchState() {
        this.$emit('switchState');
    }
}
</script>

<style scoped lang="postcss">
@layer components {
    .toggleSwitch {
        @apply w-8 h-4;
    }

    .switchButton {
        @apply bg-gray-outline bg-opacity-100 absolute inline-block w-4 h-4 rounded-lg transition;
        &_active {
            @apply transform translate-x-4;
        }
    }

    .switchButton .active {
        @apply ml-4;
    }
    .switchHandle {
        @apply bg-gray-outline opacity-56 absolute inline-block my-1 w-8 h-2 rounded-sm;
    }

    .active {
        @apply bg-success;
    }
}
</style>
