<template>
    <div class="mx-20">
        <div class="h-screen w-180 flex items-center justify-center">
            <div class="align-middle">
                <p>
                    <Logo :width="128" :height="128" class="inline" />
                    <LogoTitle :height="128" class="inline ml-8" />
                </p>
                <p class="mt-10 mb-28 text-5xl font-medium leading-tight">
                    Welcome to RSS3,<br />an open protocol designed for content and social networks in the Web 3.0 era.
                </p>
                <p class="flex justify-between">
                    <Button buttonStyle="primary" buttonSize="xl" @click="$router.push('/start/new')"
                        >Get started</Button
                    >
                    <Button buttonStyle="secondary" buttonSize="xl">About RSS3</Button>
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
import Button from '@/components/Button.vue';

@Options({
    components: {
        Logo,
        LogoTitle,
        Footer,
        Button,
    },
})
export default class StartIndex extends Vue {}
</script>
