<template>
    <div class="mx-20">
        <div class="h-screen w-180 flex items-center justify-center">
            <div class="align-middle">
                <p><Logo class="inline" /><LogoTitle class="inline ml-6" /></p>
                <p class="text-5xl font-medium leading-tight">
                    Welcome to RSS3,<br />an open protocol designed for content
                    and social networks in the Web 3.0 era.
                </p>
            </div>
        </div>
        <Footer class="fixed bottom-16" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import LogoTitle from '@/components/LogoTitle.vue';
import Footer from '@/components/Footer.vue';

@Options({
    components: {
        Logo,
        LogoTitle,
        Footer,
    },
})
export default class StartIndex extends Vue {}
</script>
