<template>
    <div class="mx-18">
        <div class="content w-180 flex items-center justify-center">
            <div class="align-middle py-15">
                <p>
                    <Logo :width="128" :height="128" class="inline" />
                    <LogoTitle class="inline ml-8" />
                </p>
                <p class="mt-10 mb-28 text-5xl font-medium leading-tight">
                    Welcome to RE: ID,<br />an open protocol designed for content and social networks in the Web 3.0
                    era.
                </p>
                <p class="flex justify-between">
                    <Button buttonStyle="primary" buttonSize="xl" @click="$router.push('/start/new')"
                        >Get started</Button
                    >
                    <Button buttonStyle="secondary" buttonSize="xl">About RSS3</Button>
                </p>
            </div>
        </div>
        <Footer class="mb-18" />
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

<style lang="postcss" scoped>
.content {
    min-height: calc(100vh - 90px);
}
</style>
