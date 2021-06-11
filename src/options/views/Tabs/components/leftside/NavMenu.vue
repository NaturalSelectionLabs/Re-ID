<template>
    <div class="routers-link">
        <router-link to="/home"> Home </router-link>
        <router-link to="/advanced"> Advanced </router-link>
        <router-link to="/profile"> Profile </router-link>
        <router-link to="/invite"> Invite others </router-link>
        <router-link to="/settings"> Settings </router-link>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class Navmenu extends Vue {}
</script>

<style lang="postcss" scoped>
@layer components {
    .routers-link {
        @apply mt-16;

        > a {
            @apply block font-semibold text-2xl leading-7 mb-8;

            &.router-link-active {
                @apply text-primary;

                &::after {
                    content: '\279C';

                    @apply ml-8;
                }
            }
        }
    }
}
</style>
