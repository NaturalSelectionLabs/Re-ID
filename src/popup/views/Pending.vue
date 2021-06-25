<template>
    <popup-container>
        <div>
            <div class="popupHeader">
                <logo :height="25" :width="25" />
                <div class="syncIndicator">
                    <span
                        :class="[
                            currentState ? 'text-black' : 'text-gray-text text-opacity-60',
                            'font-normal',
                            'font-xs',
                        ]"
                        >Syncing</span
                    >
                    <span class="relative">
                        <span
                            class="
                                cursor-pointer
                                text-gray-text text-opacity-60
                                font-normal font-xs
                                transform
                                origin-center
                                scale-75
                            "
                            @mouseover="showTooltip"
                            @mouseleave="hideTooltip"
                            >ⓘ</span
                        >
                        <tooltip
                            class="z-10"
                            v-show="showingTooltip"
                            widthClass="w-27"
                            heightClass="h-12"
                            text="Toggle syncing with RSS3"
                            viewType="popup"
                        />
                    </span>
                    <toggle-switch :defaultState="currentState" @switchState="switchSyncState" />
                </div>
            </div>
        </div>
        <div class="mainContainer">
            <div class="text-4xl font-semibold text-black w-55 text-left">Oops!</div>
            <div class="text-xs font-semibold text-black w-55 text-left">
                You’re not invited yet. Send your address below to someone already on RSS3 and ask for an invitation.
            </div>
            <key-container :keyText="address" :isPrivate="false" viewType="popup" :isCollapse="false" />
            <Button buttonStyle="primary" buttonSize="lg" @click="openOptionsPage">Expand</Button>
            <Button buttonStyle="secondary" buttonSize="lg" @click="tweetForInvitation">Ask on Twitter</Button>
        </div>
    </popup-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PopupContainer from '@/components/PopupContainer.vue';
import KeyContainer from '@/components/KeyContainer.vue';
import Button from '@/components/Button.vue';
import Logo from '@/components/Logo.vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import Tooltip from '@/components/Tooltip.vue';
import RSS3 from '@/common/rss3';
import { RSS3Item } from 'rss3/types/rss3';
import syncControl from '@/common/sync-control';

@Options({
    components: {
        PopupContainer,
        KeyContainer,
        Button,
        ToggleSwitch,
        Logo,
        Tooltip,
    },
})
export default class Pending extends Vue {
    currentState = false;

    address: string = ''; // public address
    privateKey: string = '';
    showingTooltip = false;

    async mounted() {
        const rss3 = await RSS3.get();
        if (rss3) {
            this.address = rss3.persona.id;
            this.currentState = await syncControl.get();
        }
    }

    async switchSyncState() {
        const status = !this.currentState;
        if (!(await syncControl.set(status))) {
            window.open('options.html', '_blank');
            return;
        }
        this.currentState = status;
    }

    showTooltip() {
        this.showingTooltip = true;
    }
    hideTooltip() {
        this.showingTooltip = false;
    }

    openOptionsPage() {
        chrome.runtime.openOptionsPage();
    }

    tweetForInvitation() {
        window.open(
            `https://twitter.com/intent/tweet?hashtags=REID,REIDinvitation&text=Looking%20for%20an%20invitation!%20My%20address:%20${this.address}`,
            '_blank',
        );
    }
}
</script>

<style scoped lang="postcss">
@layer components {
    .mainContainer {
        @apply absolute top-14 left-5 w-55 h-79 mt-2 flex flex-col justify-start items-center gap-5;
    }

    .popupHeader {
        @apply grid grid-cols-2 items-center w-55 h-8;
    }

    .syncIndicator {
        @apply flex flex-row items-center justify-end gap-1;
    }
}
</style>
