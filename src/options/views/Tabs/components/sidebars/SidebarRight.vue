<template>
    <div class="sidebar-right">
        <div class="sync-switch">
            <label>
                Syncing

                <span> &#9432; </span>
            </label>

            <ToggleSwitch :state="syncEnabled" @toggle-state="toggleSyncStatus" />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ToggleSwitch from '@/components/ToggleSwitch.vue';

@Options({
    components: {
        ToggleSwitch,
    },
    mounted() {
        this.initState();
    },
})
export default class SidebarRight extends Vue {
    syncEnabled: Boolean = true;

    initState(): void {
        chrome.storage.sync.get(['reid-twitter-sync-enabled'], (result) => {
            console.log('Loading sync enable status from local storage...');
            const enabled = result['reid-twitter-sync-enabled'];
            if (typeof enabled !== 'undefined') {
                console.log(enabled);
                this.syncEnabled = enabled;
            }
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

                > span {
                    @apply text-gray-text text-sm opacity-30 font-semibold;
                }
            }
        }
    }
}
</style>
