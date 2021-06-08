<template>
    <div class="profile">
        <div class="avatar">
            <img :src="$props.avatar" :alt="$props.username" />
        </div>
        <div class="username">
            <h1>
                {{ $props.username }}
            </h1>
        </div>
        <div class="address">
            <span>
                {{ $props.address }}
            </span>
            <span> &#128203; </span>
        </div>
        <div class="follows">
            <span>
                {{ $props.followers }}
                <label> Followers </label>
            </span>
            <span>
                {{ $props.following }}
                <label> Following </label>
            </span>
        </div>
        <div class="balance">
            <label> Balance </label>
            <span>
                {{ $props.balance }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IconCopy from '@/components/icons/IconCopy.vue';

@Options({
    components: {
        IconCopy,
    },
    props: {
        avatar: String,
        username: String,
        address: String,
        followers: Number,
        following: Number,
        balance: Number,
    },
    setup() {},
})
export default class Profile extends Vue {}
</script>

<style lang="postcss" scoped>
@layer components {
    .profile {
        @apply font-sans;

        > div {
            @apply mt-4;
        }

        .avatar > img {
            @apply w-14 h-14 rounded;
        }

        .username > h1 {
            @apply font-semibold text-2xl;
        }

        .address {
            @apply text-gray-text opacity-30 font-semibold;

            > span {
                @apply mr-4;
            }
        }

        .follows > * {
            @apply inline-block text-sm font-normal mr-4;
        }

        .balance {
            > * {
                @apply inline-block text-xl font-semibold;
            }
            > span {
                @apply ml-1;
            }
        }
    }
}
</style>
