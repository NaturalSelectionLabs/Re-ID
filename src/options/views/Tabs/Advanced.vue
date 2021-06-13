<template>
    <div class="advanced">
        <div class="editor">
            <div class="header">
                <div class="title">Raw RSS3</div>
                <div class="button">
                    <Button button-style="secondary" button-size="xs">
                        Edit
                        <span> &#9432; </span>
                    </Button>
                    <Button button-style="primary" button-size="xs"> Delete</Button>
                </div>
            </div>
            <textarea :v-model="RSS3Data"> </textarea>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';
import RSS3Common from '@/common/rss3';
import RSS3 from 'rss3';

@Options({
    components: {
        Button,
        RSS3Data: RSS3,
    },
})
export default class TabsAdvanced extends Vue {
    RSS3Data: string = '';

    async mounted() {
        const rss3 = await RSS3Common.get();
        // this.RSS3Data = JSON.stringify(rss3);
    }
}
</script>

<style lang="postcss" scoped>
@layer components {
    .advanced {
        @apply mt-24;

        > .editor {
            @apply w-max h-auto bg-gray-bg rounded p-4;

            > .header {
                @apply font-semibold text-sm flex;

                > div {
                    @apply inline-flex;
                }

                > .title {
                    @apply m-2;
                }

                > .button {
                    @apply ml-auto;

                    > * {
                        @apply mx-2;
                    }
                }
            }

            > textarea {
                @apply w-180 h-160 bg-gray-bg my-4;
            }
        }
    }
}
</style>
