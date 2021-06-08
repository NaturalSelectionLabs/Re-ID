<template>
    <h1>Hi</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
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

<style lang="postcss" scoped></style>
