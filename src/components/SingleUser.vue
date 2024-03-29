<template>
    <div class="user-container" :class="$props.viewType">
        <div class="user">
            <img class="avatar" :src="$props.user.avatar" />
            <span class="username">{{ $props.user.name }}</span>
        </div>
        <div class="address">
            <span>
                {{
                    $props.viewType === 'popup'
                        ? `${$props.user.address.substring(0, 3)}***${$props.user.address.substring(
                              $props.user.address.length - 3,
                          )}`
                        : $props.user.address
                }}
            </span>
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
        @apply duration-200 relative cursor-pointer;

        &:hover {
            @apply bg-gray-bg;
        }

        > * {
            @apply inline-block;

            > * {
                @apply inline-flex items-center;
            }
        }

        > .user {
            > span.username {
                @apply font-semibold;
            }
        }

        > .address {
            @apply absolute right-4 text-gray-700;

            &::after {
                @apply ml-1 text-primary fill-current;
                content: '\279C';
            }
        }

        &.popup {
            @apply p-2 text-xs;

            img.avatar {
                @apply w-10 h-10 rounded;
            }

            > .user {
                > span.username {
                    @apply ml-2;
                }
            }

            > .address {
                @apply text-xs;
                > span {
                    @apply h-10;
                }
            }
        }

        &.options {
            @apply p-4 text-lg;

            img.avatar {
                @apply w-14 h-14 rounded;
            }

            > .user {
                > span.username {
                    @apply ml-4;
                }
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
