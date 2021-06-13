<template>
    <input
        v-if="isSingleLine"
        :type="inputType"
        class="input"
        :placeholder="placeholderText"
        :class="{
            'input-popup': viewType === 'popup',
            'input-popup-text': viewType === 'popup',
            'input-options': viewType === 'options',
            'input-options-text': viewType === 'options',
            'input-options-compact': isCompact,
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :disabled="disabled"
    />
    <textarea
        v-if="!isSingleLine"
        class="input"
        :class="{
            'input-popup': viewType === 'popup',
            'input-popup-textarea': viewType === 'popup',
            'input-options': viewType === 'options',
            'input-options-textarea': viewType === 'options',
        }"
        :placeholder="placeholderText"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :disabled="disabled"
    ></textarea>
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
        modelValue: String,
        disabled: Boolean,
    },
    emits: ['update:modelValue'],
})
export default class Input extends Vue {
    inputType!: String;
    placeholderText?: String;
    minLength!: Number;
    maxLength!: Number;
    originalValue?: String;
    viewType!: String;
    isCompact?: Boolean;
    value?: String;
    disabled?: Boolean;

    data() {
        return {
            isSingleLine: this.inputType === 'text' || this.inputType === 'password',
        };
    }
}
</script>

<style lang="postcss">
@layer components {
    .input {
        @apply bg-gray-bg focus:bg-white focus:border-gray-outline rounded text-left placeholder-gray-text placeholder-opacity-30 text-black;
    }

    .input-popup {
        @apply w-55 h-9 rounded px-4 py-2.5 text-xs;
    }

    .input-popup-text {
        @apply h-9;
    }
    .input-popup-textarea {
        @apply h-23;
    }

    .input-options {
        @apply w-180 h-18 rounded px-8 py-5 text-2xl;
    }

    .input-options-text {
        @apply h-18;
    }

    .input-options-textarea {
        @apply h-45;
    }

    /*  raw rss3 codeblock input private key */
    .input-options-compact {
        @apply w-45 h-18;
    }
}
</style>
