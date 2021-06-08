<template>
    <div class="main">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
    mounted() {
        this.checkInit();
    },
})
export default class App extends Vue {
    isInited = false;

    checkInit(): void {
        chrome.storage.local.get(['reid-setup'], (key) => {
            this.isInited = typeof key['reid-setup'] !== 'undefined';
            if (this.isInited) {
                this.$router.push('/home');
            } else {
                this.$router.push('/setup');
            }
        });
    }
}
</script>

<style></style>
