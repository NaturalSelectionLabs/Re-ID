<template>
    <h1>RE:ID</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PopupContainer from '@/components/PopupContainer.vue';

@Options({
    components: { PopupContainer },
})
export default class Entry extends Vue {
    gotoSetup() {
        chrome.storage.local.get(['reid-set-up'], (key) => {
            if (key['reid-set-up'] === 'done') {
                this.$router.push('/home');
            } else {
                this.$router.push('/setup');
            }
        });
    }
}
</script>

<style scoped lang="postcss"></style>
