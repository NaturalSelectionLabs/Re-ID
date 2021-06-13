<template>
    <div
        class="keyContainer"
        :class="{
            'key-options': viewType === 'options',
            'key-popup': viewType === 'popup',
            'key-private': isPrivate,
            'key-collapse': isCollapse,
            'key-blur': blur,
        }"
    >
        <span class="key-content">{{
            isCollapse
                ? `${keyText.substring(0, 3)}***${keyText.substring(keyText.length - 3)}` // if collapse only display first and last three chars
                : keyText
        }}</span>
        <IconCopy
            :class="{ 'key-copy': true, 'opacity-60': !isCollapse, 'opacity-30': isCollapse }"
            :width="viewType === 'popup' ? 10 : 18"
            :height="viewType === 'popup' ? 10 : 18"
        />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import IconCopy from '@/components/icons/IconCopy.vue';
@Options({
    props: {
        keyText: String,
        isPrivate: Boolean, // true if private key
        viewType: String, // options / popup
        isCollapse: Boolean, // true if in 0x1***980 format (on homepage under avatars)
        blur: Boolean,
    },
    components: {
        IconCopy,
    },
})
export default class KeyContainer extends Vue {
    keyText!: String;
    isPrivate!: Boolean;
    viewType!: String;
    isCollapse!: Boolean;
    blur?: Boolean;
}
</script>

<style lang="postcss">
@layer components {
    .keyContainer {
        @apply flex rounded bg-gray-bg text-gray-text text-opacity-60 font-medium items-center justify-center;
    }

    .key-private {
        @apply bg-danger bg-opacity-10;
    }

    .key-blur {
        @apply filter blur;
    }

    .key-collapse {
        @apply bg-transparent text-opacity-30;
        width: max-content;
    }

    .key-popup {
        @apply w-55 h-9 px-4 py-3 text-xs;
        & .key-collapse {
            @apply h-4;
        }
    }

    .key-options {
        @apply w-180 h-18 px-8 py-5 text-2xl;
        & .key-collapse {
            @apply h-1;
        }
    }

    .key-content {
        @apply w-155.5 truncate flex-1;
    }

    .key-copy {
        width: 18px;
    }
}
</style>
