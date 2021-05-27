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
        v-if="!isSingleLine"
        class="input"
        :class="{
            'input-popup': viewType === 'popup',
            'input-popup-textarea': viewType === 'popup',
            'input-options': viewType === 'options',
            'input-options-textarea': viewType === 'options',
        }"
        :placeholder="placeholderText"
    ></textarea>
</template>

<script lang="ts">
// import { defineComponent, PropType } from 'vue'
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
            inputType: this.inputType,
            isSingleLine:
                this.inputType === 'text' || this.inputType === 'password',
            placeholderText: this.placeholderText,
            minLength: this.minLength,
            maxLength: this.maxLength,
            originalValue: this.originalValue,
            viewType: this.viewType,
            isCompact: this.isCompact,
        };
    }
}
</script>

<style lang="postcss">

@layer components {
.input {
    @apply bg-gray-bg focus:bg-white focus:border focus:border-gray-outline rounded text-left font-regular placeholder-gray-text placeholder-opacity-30 text-black;
}


.input-popup {
    @apply w-55 h-9 rounded px-16 py-10 text-xs; //font-12px
}

.input-popup-text {
    @apply h-9;
}
.input-popup-textarea {
    @apply h-23;
}

.input-options {
    @apply w-180 h-18 rounded px-32 py-20 text-2xl; //font-24px
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
</style>
