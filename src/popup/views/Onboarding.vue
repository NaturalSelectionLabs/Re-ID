<template>
    <popup-container>
        <div class="row-start-2 row-end-3 flex flex-col justify-start items-left gap-y-5">
            <p><logo width="55" height="55" class="inline" /></p>
            <p><logo-title height="30" width="100" class="inline" /></p>
            <Button buttonStyle="primary" buttonSize="lg"><a href="@/options">I'm new here</a></Button>
            <Button buttonStyle="secondary" buttonSize="lg" @click="$router.push('/login')"
                >I've got my private key</Button
            >
        </div>
    </popup-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PopupContainer from '@/components/PopupContainer.vue';
import Logo from '@/components/Logo.vue';
import LogoTitle from '@/components/LogoTitle.vue';
import Button from '@/components/Button.vue';

@Options({
    components: { PopupContainer, Logo, LogoTitle, Button },
})
export default class Onboarding extends Vue {}
</script>

<style lang="postcss">
@layer components {
    .mainContainer {
        @apply w-65 h-105 rounded-lg bg-white backdrop-filter backdrop-blur;
    }
}
</style>
