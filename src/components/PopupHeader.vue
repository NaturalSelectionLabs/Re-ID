<template>
    <div class="popupHeader">
        <logo height="25" width="25" />
        <div class="syncIndicator">
            <span :class="[currentState ? 'text-black' : 'text-gray-text text-opacity-60', 'font-normal', 'font-xs']"
                >Syncing</span
            >
            <span
                class="cursor-pointer text-gray-text text-opacity-60 font-normal font-xs"
                @mouseover="showTooltip"
                @mouseleave="hideTooltip"
                >ⓘ</span
            >
            <toggle-switch @switchState="switchSyncState" />
        </div>
    </div>
    <tooltip
        class="z-10"
        v-show="showingTooltip"
        marginLeftClass="ml-28"
        widthClass="w-27"
        heightClass="h-12"
        text="Toggle syncing with RSS3"
        viewType="popup"
    />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import Tooltip from '@/components/Tooltip.vue';

@Options({
    components: { ToggleSwitch, Logo, Tooltip },
})
export default class PopupHeader extends Vue {
    currentState = true;
    showingTooltip = false;

    switchSyncState(value: boolean) {
        this.currentState = value;
    }

    showTooltip() {
        this.showingTooltip = true;
    }
    hideTooltip() {
        this.showingTooltip = false;
    }
}
</script>

<style scoped lang="postcss">
/* modal */
@layer components {
    .popupHeader {
        @apply grid grid-cols-2 items-center w-55 h-8;
    }

    .syncIndicator {
        @apply flex flex-row items-center justify-end gap-1;
    }
}
</style>
