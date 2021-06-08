<template>
    <div class="sidebar-left">
        <Profile
            avatar="https://aka.ms/no"
            username="demo"
            address="0x1****yyy"
            followers="93"
            following="193"
            balance="150"
        />
        <NavMenu />
        <Footer />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Profile from '@/options/components/leftside/Profile.vue';
import NavMenu from '@/options/components/leftside/NavMenu.vue';
import Footer from '@/options/components/leftside/Footer.vue';

@Options({
    components: {
        Profile,
        NavMenu,
        Footer,
    },
})
export default class SidebarLeft extends Vue {}
</script>

<style lang="postcss" scoped>
@layer components {
    .sidebar-left {
        @apply w-62 fixed left-18 top-18;
    }
}
</style>
