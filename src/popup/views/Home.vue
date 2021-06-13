<template>
    <popup-container>
        <popup-header> </popup-header>
        <div class="mainContainer">
            <div class="profileContainer">
                <div class="generalInfo">
                    <img class="avatar" :src="avatarUrl" />
                    <div class="h-10 w-35 flex flex-col">
                        <p class="font-xs font-semibold pt-0.5">{{ userID }}</p>
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
                    <Button buttonStyle="primary" buttonSize="md"><a href="./options">Expand</a></Button>
                </div>
            </div>
            <div class="preview">
                <single-item v-for="(item, idx) in items" :key="idx" viewType="popup" :rss3Item="item" />
            </div>
        </div>
    </popup-container>
    <collapse-menu v-show="showingMenu" class="absolute z-20 top-18 right-5" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PopupContainer from '@/components/PopupContainer.vue';
import PopupHeader from '@/components/PopupHeader.vue';
import KeyContainer from '@/components/KeyContainer.vue';
import Button from '@/components/Button.vue';
import CollapseMenu from '@/components/CollapseMenu.vue';
import IconMore from '@/components/icons/IconMore.vue';
import SingleItem from '@/components/SingleItem.vue';

@Options({
    components: { PopupContainer, PopupHeader, KeyContainer, Button, CollapseMenu, IconMore, SingleItem },
})
export default class App extends Vue {
    avatarUrl = 'https://i.imgur.com/vTrCSys.jpg';
    userID = 'RSS3';
    address = '0x47e18d6c386898b424025cd9db446f779ef24ad33a26c499c87bb3d93u896yhl';
    bio = 'RSS3 is the dopest team yay';
    showingMenu = false;

    items = [
        {
            id: '0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-item-1',
            authors: ['0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944'],
            summary: 'Yes!!',
            date_published: '2021-05-09T16:56:35.529Z',
            date_modified: '2021-05-09T16:56:35.529Z',

            type: 'comment',
            upstream: '0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-item-0',
        },
        {
            id: '0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-item-0',
            authors: ['0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944'],
            title: 'Hello World',
            summary: 'Hello, this is the first item of RSS3.',
            date_published: '2021-05-08T16:56:35.529Z',
            date_modified: '2021-05-08T16:56:35.529Z',

            contents: [
                {
                    address: ['dweb://never.html', 'https://example.com/never.html'],
                    mime_type: 'text/html',
                },
                {
                    address: ['dweb://never.jpg'],
                    mime_type: 'image/jpeg',
                },
            ],

            '@contexts': [
                {
                    type: 'comment',
                    list: '0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-context@0@comment-0',
                },
                {
                    type: 'like',
                    list: '0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-context@0@like-0',
                },
            ],
        },
    ];

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
    .profileContainer {
        @apply flex flex-col gap-2 pb-2 w-55;
    }
    .generalInfo {
        @apply grid grid-cols-profile gap-x-1 h-10 w-35 items-center;
    }

    .avatar {
        @apply h-10 w-10 rounded object-cover;
    }

    .preview {
        @apply w-55 h-60 overflow-y-scroll divide-y divide-gray-outline divide-opacity-20;
    }
}
</style>
