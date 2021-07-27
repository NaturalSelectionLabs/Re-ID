<template>
    <a
        class="user-container"
        :class="$props.viewType"
        target="_blank"
        :href="'https://rss3scan.io/address/' + $props.user.address"
    >
        <div class="user">
            <img class="avatar" :src="$props.user.avatar" />
            <span class="username">{{ $props.user.name }}</span>
        </div>
        <div class="address">
            <span>
                {{ $props.user.address }}
            </span>
        </div>
    </a>
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
        @apply p-4 duration-200
        hover:bg-gray-bg;

        > * {
            @apply inline-block;

            > * {
                @apply inline-flex items-center;
            }
        }

        > .user {
            > span.username {
                @apply ml-4 font-semibold;
            }
        }

        > .address {
            @apply absolute right-4 text-gray-700;

            &::after {
                @apply ml-1 text-primary;
                content: '\279C';
            }
        }

        &.popup {
            @apply text-xs;

            img.avatar {
                @apply w-10 h-10 rounded;
            }

            > .address {
                @apply text-xs;
                > span {
                    @apply h-10;
                }
            }
        }

        &.options {
            @apply text-lg;

            img.avatar {
                @apply w-14 h-14 rounded;
            }

            > .address {
                @apply text-xs;
                > span {
                    @apply h-14;
                }
            }
        }
    }
}
</style>
