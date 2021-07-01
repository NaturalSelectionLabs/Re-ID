<template>
    <footer>
        <ol>
            <li class="ml-0">
                <a href="https://reid.town/" target="_blank">Re: ID</a>
            </li>
            <li>
                <span>Version {{ version }}</span>
            </li>
            <li>
                <a href="https://github.com/NaturalSelectionLabs/Re-ID" target="_blank">Source Code</a>
            </li>
        </ol>
    </footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

declare var VERSION: string;

export default class Footer extends Vue {
    version = VERSION;
}
</script>

<style scoped lang="postcss">
li {
    @apply text-gray-text inline ml-12;
}
</style>
