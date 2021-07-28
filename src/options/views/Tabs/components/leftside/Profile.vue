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
        <div class="address" @click="copy($props.address)">
            <span class="mr-4">
                {{ $props.address.substring(0, 6) + '***' + $props.address.substring($props.address.length - 3) }}
            </span>
            <span class="relative">
                <IconCopy :width="copyButtonSize" :height="copyButtonSize" />
                <Tooltip
                    class="z-10"
                    v-show="showingTooltip"
                    widthClass="w-15"
                    heightClass="h-6"
                    text="Copied"
                    viewType="popup"
                />
            </span>
        </div>
        <div class="follows">
            <router-link to="/followers">
                <b>{{ $props.followersCount }}</b>
                <span class="label"> Followers </span>
            </router-link>
            <router-link to="/following">
                <b>{{ $props.followingCount }}</b>
                <span class="label"> Following </span>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IconCopy from '@/components/icons/IconCopy.vue';
import Tooltip from '@/components/Tooltip.vue';

@Options({
    components: {
        Tooltip,
        IconCopy,
    },
    props: {
        avatar: String,
        username: String,
        address: String,
        followersCount: Number,
        followingCount: Number,
    },
})
export default class Profile extends Vue {
    showingTooltip = false;
    copyButtonSize: Number = 12;

    async copy(text: string) {
        await navigator.clipboard.writeText(text);
        this.showingTooltip = true;
        setTimeout(() => (this.showingTooltip = false), 500);
    }
}
</script>

<style lang="postcss" scoped>
@layer components {
    .profile {
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
            @apply text-gray-text opacity-30 font-semibold cursor-pointer;

            > * {
                @apply inline-block;
            }
        }
        .follows > * {
            @apply inline-block text-sm font-normal mr-8;

            &.router-link-active {
                @apply text-primary;
            }

            .label {
                @apply ml-1.5;
            }
        }
    }
}
</style>
