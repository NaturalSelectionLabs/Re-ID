<template>
    <label class="toggleSwitch" :class="{ active: currentState }">
        <input type="checkbox" :disabled="isDisabled" v-model="checkedValue" />
        <span class="switchButton"></span>
    </label>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
@Options({
    props: {
        isDisabled: Boolean,
        defaultState: Boolean,
    },
})
export default class ToggleSwitch extends Vue {
    isDisabled: Boolean = false;
    defaultState: Boolean = true;

    currentState = this.defaultState;

    get checkedValue() {
        return this.currentState;
    }
    set checkedValue(newValue) {
        this.currentState = newValue;
        this.$emit('change', newValue);
    }
}
</script>

<style scoped lang="postcss">
@layer components {
    .toggleSwitch {
        @apply align-middle;
        input[type='checkbox'] {
            @apply absolute opacity-0 w-0 h-0;
        }

        .switchButton {
            @apply relative inline-block w-5 h-1 rounded-sm bg-black bg-opacity-43 transition-all duration-200;

            &:before,
            &:after {
                content: '';
                @apply absolute block w-4 h-4 transform translate-x-0 transition-all duration-200 ease-bezier;
            }
            &:before {
                @apply bg-opacity-0;
            }
            &:after {
                @apply bg-opacity-1;
            }

            .active & {
                @apply bg-success bg-opacity-43;

                &:before,
                &:after {
                    @apply transform translate-x-3;
                }
                &:after {
                    @apply bg-opacity-1;
                }
            }
        }
    }

    .switchButton {
    }
}
</style>
