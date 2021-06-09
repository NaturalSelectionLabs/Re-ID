<template>
    <footer>
        <ol>
            <li class="ml-0"><a href="#">rss3.io</a></li>
            <li><a href="#">About</a></li>
            <li>
                <a href="#">Version {{ version }}</a>
            </li>
            <li><a href="#">Source Code</a></li>
            <li><a href="#">Term of Use</a></li>
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

<style scope lang="postcss">
li {
    @apply text-gray-text inline ml-12;
}
</style>
