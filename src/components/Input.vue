<template>
    <input
        v-if="isSingleLine"
        :type="inputType"
        class="input"
        :placeholder="placeholderText"
        :value="originalValue"
        :class="{
            'input-popup': viewType === 'popup',
            'input-popup-text': viewType === 'popup',
            'input-options': viewType === 'options',
            'input-options-text': viewType === 'options',
            'input-options-compact': isCompact,
        }"
    />
    <textarea
        v-else
        class="input"
        :class="{
            'input-popup': viewType === 'popup',
            'input-popup-textarea': viewType === 'popup',
            'input-options': viewType === 'options',
            'input-options-textarea': viewType === 'options',
        }"
        :placeholder="placeholderText"
        >{{ originalValue }}</textarea
    >
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        inputType: String, // 'text'/'password'/'textArea'
        placeholderText: String,
        minLength: Number,
        maxLength: Number,
        originalValue: String, // for profile related input
        viewType: String,
        isCompact: Boolean, //default: false, true for input private key in the raw rss3 codeblock
    },
})
export default class Input extends Vue {
    inputType!: String;
    placeholderText: String = '';
    minLength!: Number;
    maxLength!: Number;
    originalValue: String = '';
    viewType!: String;
    isCompact: Boolean = false;

    data() {
        return {
            isSingleLine:
                this.inputType === 'text' || this.inputType === 'password',
        };
    }
}
</script>

<style scoped lang="postcss">
@layer components {
    .input {
        @apply bg-gray-bg rounded text-left font-normal placeholder-gray-text placeholder-opacity-30 text-black;
    }

    .input:focus {
        @apply bg-white border border-gray-outline;
    }

    .input-popup {
        @apply w-55 h-9 rounded px-4 py-2.5 text-xs; /* font-12px */
    }

    .input-popup-text {
        @apply h-9;
    }
    .input-popup-textarea {
        @apply h-23;
    }

    .input-options {
        @apply w-180 h-18 rounded px-8 py-5 text-2xl; /* font-24px */
    }

    .input-options-text {
        @apply h-18;
    }

    .input-options-textarea {
        @apply h-45;
    }

    /*  raw rss3 codeblock input private key */
    .input-options-compact {
        @apply w-186 h-18;
    }
}
</style>
