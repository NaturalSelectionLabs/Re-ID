<template>
    <div
        class="keyContainer cursor-pointer"
        :class="{
            'key-options': viewType === 'options',
            'key-popup': viewType === 'popup',
            'key-private': isPrivate,
            'key-collapse-popup': isCollapse && viewType === 'popup',
            'key-collapse-options': isCollapse && viewType === 'options',
            'key-blur': $props.blur,
        }"
        @click="copy(keyText)"
    >
        <span
            :class="[
                'pr-1',
                viewType === 'popup' ? (!isCollapse ? 'w-45' : '') : 'w-155.5',
                'break-all',
                'truncate',
                'flex-1',
                'align-middle',
            ]"
            >{{
                isCollapse
                    ? `${keyText.substring(0, 3)}***${keyText.substring(keyText.length - 3)}` // if collapse only display first and last three chars
                    : keyText
            }}</span
        >
        <div class="inline-block relative align-middle">
            <IconCopy
                :class="[isCollapse ? 'opacity-30' : 'opacity-60', 'cursor-pointer']"
                :width="viewType === 'popup' ? 12 : 18"
                :height="viewType === 'popup' ? 12 : 18"
            />
            <tooltip class="z-10" v-show="showingTooltip" text="Copied" viewType="popup" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import IconCopy from '@/components/icons/IconCopy.vue';
import Tooltip from '@/components/Tooltip.vue';

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
        Tooltip,
    },
})
export default class KeyContainer extends Vue {
    keyText!: String;
    isPrivate!: Boolean;
    viewType!: String;
    isCollapse!: Boolean;
    blur?: Boolean;

    clipboardReady = false;
    showingTooltip = false;

    created() {
        this.clipboardReady = !!navigator.clipboard;
    }

    async copy(text: string) {
        await navigator.clipboard.writeText(text);
        this.showingTooltip = true;
        setTimeout(() => (this.showingTooltip = false), 500);
    }
}
</script>

<style scoped lang="postcss">
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

    .key-popup {
        @apply w-55 h-9 px-4 py-3 text-xs;
        & .key-collapse {
            @apply h-4;
        }
    }

    .key-popup {
        @apply w-55 h-9 px-4 py-2.5 text-xs;
    }

    .key-options {
        @apply w-180 h-18 px-8 py-5 text-2xl;
    }

    .key-collapse {
        @apply bg-transparent text-opacity-30 h-4 w-auto p-0 inline-block;
    }

    .tooltip {
        @apply absolute left-1/2 transform -translate-x-1/2;
        top: calc(100% + 12px);
    }

    .key-collapse-popup {
        @apply bg-transparent text-opacity-30 h-4 w-21 p-0;
    }
    .key-collapse-options {
        @apply bg-transparent text-opacity-30 h-4 w-35 p-0;
    }
}
</style>
