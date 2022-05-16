<template>
    <div class="mx-18">
        <div class="content my-12 w-180">
            <Logo :width="104" :height="104" />
            <BackButton viewType="options" class="block mt-9 mb-8" v-if="!content.hideBack" />
            <h2 class="text-6.3xl font-semibold">{{ content.title }}</h2>
            <div class="text-2xl font-semibold mt-4 mb-12 relative">
                <span class="align-middle">{{ content.description }}</span>
                <span class="group ml-5 text-gray-text text-base align-middle leading-7" v-if="content.tips">
                    <span class="cursor-pointer">ⓘ</span>
                    <span
                        class="
                            group-hover:inline
                            hidden
                            text-2xl
                            absolute
                            top-0
                            left-full
                            w-120
                            h-92
                            whitespace-pre-line
                            bg-primary bg-opacity-15
                            text-primary
                            box-border
                            py-7
                            pl-11
                            pr-18
                            ml-14
                        "
                    >
                        <span class="block">Tips</span>
                        <span class="block font-normal mt-6" v-for="tip in content.tips" :key="tip">{{ tip }}</span>
                        <span
                            class="
                                block
                                absolute
                                top-8
                                right-full
                                w-0
                                h-0
                                border-solid border-t-19 border-r-26 border-b-19 border-l-0
                                triangle
                            "
                        ></span>
                    </span>
                </span>
            </div>
            <router-view></router-view>
        </div>
        <Footer class="mb-18" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import Footer from '@/components/Footer.vue';
import BackButton from '@/components/BackButton.vue';

@Options({
    components: {
        Logo,
        Footer,
        BackButton,
    },
})
export default class StartBase extends Vue {
    contents: {
        [key: string]: {
            title: string;
            description?: string;
            hideBack?: boolean;
            tips?: string[];
        };
    } = {
        new: {
            title: 'New here?',
            hideBack: true,
        },
        login: {
            title: 'Log in',
        },
        privatekey: {
            title: 'Private Key',
            description: 'Your private key is a secret key that helps you back up and restore your account easily.',
            tips: [
                '❶  Store your private key in a key manager like 1Password.',
                '❷  Write your private key on a piece of paper and store in a secure location.',
                '❸  Memorize your private key.',
            ],
        },
        saveprivatekey: {
            title: 'Save your private key',
            description:
                'Make sure you have saved your private key before you continue. You will loose access to your RSS3 file if you lost your private key.',
            tips: [
                '❶  Store your private key in a key manager like 1Password.',
                '❷  Write your private key on a piece of paper and store in a secure location.',
                '❸  Memorize your private key.',
            ],
        },
        address: {
            title: 'Almost there!',
            description: 'Send your address below to someone already on RSS3 and ask for an invitation.',
        },
        pending: {
            title: 'Pending invitation',
            description:
                'Sorry, your invitation is still pending. Make sure someone has invited you. If not, send your address to someone already on RSS3 and ask for an invitation.',
        },
        profile: {
            title: 'Set your profile',
        },
        congrats: {
            title: 'Congrats!',
            description: 'You’ve all set! Welcome to RE: ID : )',
        },
        migrate: {
            title: 'Migrate your account',
            description: "It's time to upgrade your account to latest RSS3!",
            tips: [
                "❶  Before start, you'll need some $CSB to create valid transactions.",
                "❷  Don't worry, you can get some $CSB from faucet.",
                '❸  Your data would be storage on Crossbell Chain.',
            ],
        },
    };

    get content() {
        return this.contents[this.$route.path.replace(/^\/start\//, '')] || {};
    }
}
</script>

<style lang="postcss" scoped>
@layer utilities {
    .triangle {
        @apply opacity-15;
        border-color: transparent #5c65f4 transparent transparent;
    }
}

.content {
    min-height: calc(100vh - 186px);
}
</style>
