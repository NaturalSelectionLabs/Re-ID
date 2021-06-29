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

            <ToggleSwitch :default-state="syncEnabled" @switch-state="toggleSyncStatus" />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import Tooltip from '@/components/Tooltip.vue';
import syncControl from '@/common/sync-control';

@Options({
    components: {
        Tooltip,
        ToggleSwitch,
    },
})
export default class SidebarRight extends Vue {
    syncEnabled: Boolean = false;
    showingTooltip: Boolean = false;

    async mounted() {
        this.syncEnabled = await syncControl.get();
    }

    async toggleSyncStatus() {
        const status = !this.syncEnabled;
        if (!(await syncControl.set(status))) {
            await this.$router.push('/start/address');
            return;
        }
        this.syncEnabled = status;
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
