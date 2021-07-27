<template>
    <div class="user-container" :class="$props.viewType">
        <div class="user">
            <img class="avatar" :src="$props.user.avatar" />
            <span class="username">{{ $props.user.name }}</span>
        </div>
        <div class="address">
            <a target="_blank" :href="'https://rss3scan.io/address/' + $props.user.address">
                {{ $props.user.address }}
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        viewType: String,
        user: {
            avatar: String,
            name: String,
            address: String,
        },
    },
})
export default class SingleUser extends Vue {}
</script>

<style scoped lang="postcss">
@layer components {
    .user-container {
        @apply py-4;

        > * {
            @apply inline-block;

            > * {
                @apply inline-flex items-center;
            }
        }

        > .user {
            > span.username {
                @apply ml-4;
            }
        }

        > .address {
            @apply absolute right-0;
        }

        &.popup {
            @apply text-xs;

            img.avatar {
                @apply w-14 h-14 rounded;
            }
        }

        &.options {
            @apply text-lg;

            img.avatar {
                @apply w-10 h-10 rounded;
            }
        }
    }
}
</style>
