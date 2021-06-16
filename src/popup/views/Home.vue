<template>
    <popup-container>
        <div>
            <div class="popupHeader">
                <logo height="25" width="25" />
                <div class="syncIndicator">
                    <span
                        :class="[
                            currentState ? 'text-black' : 'text-gray-text text-opacity-60',
                            'font-normal',
                            'font-xs',
                        ]"
                        >Syncing</span
                    >
                    <span
                        class="cursor-pointer text-gray-text text-opacity-60 font-normal font-xs"
                        @mouseover="showTooltip"
                        @mouseleave="hideTooltip"
                        >ⓘ</span
                    >
                    <toggle-switch :defaultState="currentState" @switchState="switchSyncState" />
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
        </div>
        <div class="mainContainer">
            <div class="profileContainer">
                <div class="generalInfo">
                    <img class="avatar" :src="avatar" />
                    <div class="h-10 w-35 flex flex-col">
                        <p class="font-xs font-semibold pt-0.5">{{ username }}</p>
                        <key-container :keyText="address" :isPrivate="false" viewType="popup" :isCollapse="true" />
                    </div>
                    <Button buttonStyle="outlined" buttonSize="xxs" @focus="showMenu" @focusout="hideMenu">
                        <icon-more class="fill-current" width="16" height="16" />
                    </Button>
                </div>
                <div class="bio font-xs font-normal text-gray-text text-opacity-60">
                    {{ bio }}
                </div>
                <div class="buttons w-55 h-7 grid grid-cols-2 gap-1">
                    <Button buttonStyle="primary" buttonSize="md" @click="$router.push('/Invite')">Invite</Button>
                    <Button buttonStyle="primary" buttonSize="md"><a href="@/options">Expand</a></Button>
                </div>
            </div>
            <item-list viewType="popup">
                <single-item v-for="(item, idx) in items" :key="idx" viewType="popup" :rss3Item="item" />
            </item-list>
        </div>
    </popup-container>
    <collapse-menu v-show="showingMenu" class="absolute z-20 top-18 right-5" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PopupContainer from '@/components/PopupContainer.vue';
import KeyContainer from '@/components/KeyContainer.vue';
import Button from '@/components/Button.vue';
import CollapseMenu from '@/components/CollapseMenu.vue';
import IconMore from '@/components/icons/IconMore.vue';
import SingleItem from '@/components/SingleItem.vue';
import ItemList from '@/components/ItemList.vue';
import Logo from '@/components/Logo.vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import Tooltip from '@/components/Tooltip.vue';
import RSS3 from '@/common/rss3';
import { RSS3Item, RSS3Items } from 'rss3/types/rss3';
import { ThirdPartyAddress } from 'rss3/types/rss3';

@Options({
    components: {
        PopupContainer,
        KeyContainer,
        Button,
        CollapseMenu,
        IconMore,
        SingleItem,
        ToggleSwitch,
        Logo,
        Tooltip,
        ItemList,
    },
})
export default class Home extends Vue {
    currentState = true;
    avatar: any;
    username: String = '';
    bio: String = '';
    address: string = ''; // public address
    items: any;

    showingMenu = false;
    showingTooltip = false;

    async mounted() {
        const rss3 = await RSS3.get();
        if (rss3) {
            const profile = await rss3.profile.get();
            if (profile?.avatar) this.avatar = profile.avatar[0] || '';
            this.username = profile?.name || '';
            this.bio = profile?.bio || '';
            const currentItems = await rss3.items.get();
            this.items = currentItems.items;

            this.address = rss3.persona.id;
        }
    }

    switchSyncState() {
        this.currentState = !this.currentState;
        console.log(this.currentState);
        chrome.storage.sync.set({
            'reid-twitter-sync-enabled': this.currentState,
        });
    }

    showTooltip() {
        this.showingTooltip = true;
    }
    hideTooltip() {
        this.showingTooltip = false;
    }

    showMenu() {
        this.showingMenu = true;
    }

    hideMenu() {
        this.showingMenu = false;
    }
}
</script>

<style scoped lang="postcss">
@layer components {
    .mainContainer {
        @apply absolute top-14 left-5 w-55 h-79 divide-y divide-gray-outline divide-opacity-20;
    }

    .popupHeader {
        @apply grid grid-cols-2 items-center w-55 h-8;
    }

    .syncIndicator {
        @apply flex flex-row items-center justify-end gap-1;
    }
    .profileContainer {
        @apply flex flex-col gap-2 pb-2 w-55;
    }
    .generalInfo {
        @apply grid grid-cols-profile gap-x-1 h-10 w-35 items-center;
    }

    .avatar {
        @apply h-10 w-10 rounded object-cover;
    }
}
</style>
