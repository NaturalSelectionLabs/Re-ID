<template>
    <div class="routers-link">
        <router-link to="/home">
            Home
            <IconRight />
        </router-link>
        <router-link to="/advanced">
            Advanced
            <IconRight />
        </router-link>
        <router-link to="/profile">
            Profile
            <IconRight />
        </router-link>
        <router-link to="/invite">
            Invite others
            <IconRight />
        </router-link>
        <router-link to="/settings">
            Settings
            <IconRight />
        </router-link>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IconRight from '@/components/icons/IconRight.vue';

@Options({
    components: { IconRight },
})
export default class Navmenu extends Vue {}
</script>

<style lang="postcss" scoped>
@layer components {
    .routers-link {
        @apply mt-16;

        > a {
            @apply block font-semibold text-2xl leading-7 mb-8;

            > * {
                @apply ml-8 hidden;
            }

            &.router-link-active {
                @apply text-primary;

                > * {
                    @apply inline-block;
                }
            }
        }
    }
}
</style>
