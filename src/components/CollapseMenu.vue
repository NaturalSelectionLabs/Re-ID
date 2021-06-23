<template>
    <div class="collapseMenu">
        <div>
            <Button buttonText="Profile" buttonStyle="menuItem" buttonSize="xs" @click="$router.push('/Profile')">
                Profile</Button
            >
        </div>
        <div>
            <Button buttonText="Account" buttonStyle="menuItem" buttonSize="xs" @click="$router.push('/Account')">
                Account</Button
            >
        </div>
        <div>
            <Button buttonText="Log out" buttonStyle="menuItem" buttonSize="xs" @click="logout()"> Log out</Button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Button from '@/components/Button.vue';
import RSS3 from '@/common/rss3';

@Options({
    components: {
        Button,
    },
})
export default class CollapseMenu extends Vue {
    async logout() {
        await RSS3.clear();
        this.$router.push('/Onboarding');
    }
}
</script>

<style lang="postcss">
@layer components {
    .collapseMenu {
        @apply grid-rows-3 w-27 h-19.5 py-0.5 px-0.5 bg-white rounded drop-shadow filter backdrop-filter backdrop-blur divide-y divide-gray-outline divide-opacity-10;
    }
}
</style>
