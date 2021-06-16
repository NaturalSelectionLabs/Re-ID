<template>
    <div class="sidebar-right">
        <div class="sync-switch">
            <label>
                Syncing

                <span> &#9432; </span>
            </label>

            <ToggleSwitch v-if="loadFin" :default-state="syncEnabled" @switch-state="toggleSyncStatus" />
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
    loadFin: Boolean = false;

    initState(): void {
        chrome.storage.sync.get(['reid-twitter-sync-enabled'], (result) => {
            console.log('Loading sync enable status from local storage...');
            const enabled = result['reid-twitter-sync-enabled'];
            if (typeof enabled !== 'undefined') {
                console.log(enabled);
                this.syncEnabled = enabled;
                this.loadFin = true;
            }
        });
    }

    toggleSyncStatus(): void {
        this.syncEnabled = !this.syncEnabled;
        console.log('Saving sync enable status (', this.syncEnabled, ') to local storage...');
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
