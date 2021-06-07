<template>
    <button
        :class="{
            'btn-primary': isPrimary,
            'btn-secondary': isSecondary,
        }"
    >
        {{ buttonText }}
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        buttonStyle: String,
        viewType: String,
        buttonText: String,
    },

    data() {
        return {
            buttonText: this.buttonText,
            isPrimary: this.buttonStyle === 'primary',
            isSecondary: this.buttonStyle === 'secondary',
            isPopup: this.viewType === 'popup',
            isOptions: this.viewType === 'options',
        };
    },
});
</script>

<style lang="postcss">
@layer components {
    .btn {
        text-align: left;
        text-decoration: none;
    }
    .btn-primary {
        @apply bg-primary rounded text-color-white;
    }

    .btn-secondary {
        @apply bg-primary bg-opacity-15 rounded text-color-primary;
    }

    .btn-popup {
        @apply w;
    }
}
</style>
