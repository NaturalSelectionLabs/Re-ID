<template>
    <div
        class="keyContainer"
        :class="{
            'key-options': viewType === 'options',
            'key-popup': viewType === 'popup',
            'key-private': isPrivate,
            'key-collapse': isCollapse,
        }"
    >
        <span>{{
            isCollapse
                ? `${keyText.substring(0, 3)}***${keyText.substring(keyText.length - 3)}` // if collapse only display first and last three chars
                : keyText
        }}</span>
        <IconCopy
            :class="{ 'opacity-60': !isCollapse, 'opacity-30': isCollapse }"
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
}
</script>

<style lang="postcss">
@layer components {
    .keyContainer {
        @apply flex rounded bg-gray-bg text-gray-text text-opacity-60 font-medium;
    }

    .key-private {
        @apply bg-danger bg-opacity-10 filter blur;
    }

    .key-collapse {
        @apply bg-transparent text-opacity-30;
        width: max-content;
    }

    .key-popup {
        @apply w-55 h-9 px-16 py-10 text-xs; //font-12px
        & .key-collapse {
            @apply h-4;
        }
    }

    .key-options {
        @apply w-180 h-18 px-32 py-20 text-2xl; //font-24px
        & .key-collapse {
            @apply h-1;
        }
    }
    }
}
</style>
