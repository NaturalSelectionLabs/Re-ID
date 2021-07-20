<template>
    <div>
        <SidebarLeft />
        <div class="body">
            <router-view></router-view>
            <Footer class="footer" />
        </div>
        <SidebarRight />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SidebarLeft from './components/sidebars/SidebarLeft.vue';
import SidebarRight from './components/sidebars/SidebarRight.vue';
import Footer from '@/components/Footer.vue';

@Options({
    components: {
        Footer,
        SidebarLeft,
        SidebarRight,
    },
})
export default class TabsBase extends Vue {}
</script>

<style lang="postcss" scoped>
@layer components {
    .body {
        @apply relative w-180 mx-80 px-2 top-18 box-content pt-24;

        > * {
            @apply relative;
        }

        .footer {
            @apply fixed bottom-18;
        }
    }
}
</style>
