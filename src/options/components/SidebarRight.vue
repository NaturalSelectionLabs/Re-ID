<template>
    <div class="sidebar-right">
        <div class="sync-switch">
            <label>
                Syncing
                <span> &#9432; </span>
            </label>

            <ToggleSwitch />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import IconMore from '@/components/icons/IconMore.vue';

@Options({
    components: {
        IconMore,
        ToggleSwitch,
    },
})
export default class SidebarRight extends Vue {}
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
                    @apply text-gray-text opacity-30 font-semibold;
                }
            }
        }
    }
}
</style>
