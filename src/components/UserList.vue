<template>
    <div
        class="user-list"
        :class="{
            popup: $props.viewType === 'popup',
            options: $props.viewType === 'options',
        }"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        viewType: String,
    },
})
export default class UserList extends Vue {}
</script>

<style lang="postcss">
@layer components {
    .user-list {
        @apply flex flex-col divide-y divide-black divide-opacity-10 overflow-y-scroll;

        &.popup {
            @apply w-55 h-60;
        }

        &.options {
            @apply w-180 h-160;
        }
    }
}
</style>
