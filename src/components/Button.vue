<template>
    <button
        class="btn"
        :class="{
            'btn-primary': buttonStyle === 'primary',
            'btn-secondary': buttonStyle === 'secondary',
            'btn-disabled': buttonStyle === 'disabled',
            'btn-danger': buttonStyle === 'danger',
            'btn-menu-item': buttonStyle === 'menuItem',
            'btn-outlined': buttonStyle === 'outlined',
            'btn-xxs': buttonSize === 'xxs',
            'btn-xs': buttonSize === 'xs',
            'btn-sm': buttonSize === 'sm',
            'btn-md': buttonSize === 'md',
            'btn-lg': buttonSize === 'lg',
            'btn-xl': buttonSize === 'xl',
            'btn-xxl': buttonSize === 'xxl',
        }"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        buttonStyle: String,
        buttonText: String,
        buttonSize: String,
    },
})
export default class Button extends Vue {
    buttonStyle!: String;
    buttonSize!: String;
}
</script>

<style scoped lang="postcss">
@layer components {
    .btn {
        @apply text-left focus:outline-none;
    }
    .btn-primary {
        @apply bg-primary text-white;
    }

    .btn-secondary {
        @apply bg-primary bg-opacity-15 text-primary;
    }

    .btn-disabled {
        @apply cursor-not-allowed bg-disabled text-gray-text text-opacity-60;
    }

    .btn-danger {
        @apply bg-danger bg-opacity-35 text-gray-text text-opacity-60;
    }
    /* popup.html [...] menu each item */
    .btn-menu-item {
        @apply bg-transparent hover:bg-primary hover:bg-opacity-15 text-primary;
    }

    .btn-outlined {
        @apply bg-white active:bg-primary border border-primary text-primary active:text-white focus:bg-primary focus:text-white;
    }

    /* popup.html [...] button */
    .btn-xxs {
        @apply w-8 h-4 rounded-sm flex justify-center items-center font-normal text-xs;
    }

    /* popup.html [...] menu each item */
    .btn-xs {
        @apply w-26 h-6 rounded-sm px-3 py-1.5 font-normal text-xs;
    }

    /* options.html raw rss3 code block buttons */
    .btn-sm {
        @apply w-21 h-6 rounded-sm px-4 py-1.5 font-medium text-xs;
    }

    /* popup.html small button - [Invite] [Expand]; 
   options.html small buttons -  [Personas] [Log out] */
    .btn-md {
        @apply w-27 h-7 rounded-sm px-4 py-2 font-medium text-xs leading-3;
    }

    /* popup.html main button */
    .btn-lg {
        @apply w-55 h-9 rounded px-4 py-2.5 font-semibold text-xs;
    }

    /* options.html main button */
    .btn-xl {
        @apply w-89 h-18 rounded px-8 py-5 font-semibold text-2xl;
    }

    /* options.html extended button for long text*/
    .btn-xxl {
        @apply w-120 h-18 rounded px-8 py-5 font-semibold text-2xl;
    }
}
</style>
