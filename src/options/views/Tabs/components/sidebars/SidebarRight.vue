<template>
    <div class="sidebar-right">
        <div class="sync-switch">
            <label>
                Syncing
                <span class="relative text-gray-text text-sm font-semibold">
                    <span class="opacity-30" @mouseover="showingTooltip = true" @mouseleave="showingTooltip = false">
                        &#9432;
                    </span>
                    <Tooltip
                        v-show="showingTooltip"
                        widthClass="w-32"
                        text="Toggle syncing with RSS3"
                        view-type="options"
                    />
                </span>
            </label>

            <ToggleSwitch v-if="loadFin" :default-state="syncEnabled" @switch-state="toggleSyncStatus" />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import Tooltip from '@/components/Tooltip.vue';

@Options({
    components: {
        Tooltip,
        ToggleSwitch,
    },
    mounted() {
        this.initState();
    },
})
export default class SidebarRight extends Vue {
    syncEnabled: Boolean = true;
    loadFin: Boolean = false;
    showingTooltip: Boolean = false;

    initState(): void {
        chrome.storage.sync.get(['reid-twitter-sync-enabled'], (result) => {
            const enabled = result['reid-twitter-sync-enabled'];
            if (typeof enabled !== 'undefined') {
                this.syncEnabled = enabled;
            } else {
                // Init sync status
                chrome.storage.sync.set({
                    'reid-twitter-sync-enabled': true,
                });
            }
            this.loadFin = true;
        });
    }

    toggleSyncStatus(): void {
        this.syncEnabled = !this.syncEnabled;
        chrome.storage.sync.set({
            'reid-twitter-sync-enabled': this.syncEnabled,
        });
    }
}
</script>

<style lang="postcss" scoped>
@layer components {
    .sidebar-right {
        @apply fixed right-18 top-18;

        .sync-switch {
            @apply mx-auto my-1;

            > * {
                @apply inline-block;
            }

            > label {
                @apply font-normal text-2xl text-center mr-8;
            }
        }
    }
}
</style>
