<template>
    <div
        class="keyContainer cursor-pointer"
        :class="{
            'key-options': viewType === 'options',
            'key-popup': viewType === 'popup',
            'key-private': isPrivate,
            'key-collapse': isCollapse,
        }"
        @click="copy(keyText)"
    >
        <span :class="['pr-1', viewType === 'popup' ? 'w-45' : '', 'break-all']">{{
            isCollapse
                ? `${keyText.substring(0, 3)}***${keyText.substring(keyText.length - 3)}` // if collapse only display first and last three chars
                : keyText
        }}</span>
        <IconCopy
            :class="[isCollapse ? 'opacity-30' : 'opacity-60', 'cursor-pointer']"
            :width="viewType === 'popup' ? 12 : 18"
            :height="viewType === 'popup' ? 12 : 18"
        />
    </div>
    <tooltip
        class="z-10"
        v-show="showingTooltip"
        marginLeftClass="ml-8"
        widthClass="w-15"
        heightClass="h-6"
        text="Copied"
        viewType="popup"
    />
</template>

<script scoped lang="ts">
import { Vue, Options } from 'vue-class-component';
import IconCopy from '@/components/icons/IconCopy.vue';
import Tooltip from '@/components/Tooltip.vue';

@Options({
    props: {
        keyText: String,
        isPrivate: Boolean, // true if private key
        viewType: String, // options / popup
        isCollapse: Boolean, // true if in 0x1***980 format (on homepage under avatars)
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
        @apply flex rounded bg-gray-bg text-gray-text text-opacity-60 font-medium items-center;
    }

    .key-private {
        @apply bg-danger bg-opacity-10;
    }

    .key-popup {
        @apply w-55 h-16 px-4 py-2.5 text-xs;
    }

    .key-options {
        @apply w-180 h-18 px-8 py-5 text-2xl;
    }

    .key-collapse {
        @apply bg-transparent text-opacity-30 h-4 w-35 p-0;
    }
}
</style>
