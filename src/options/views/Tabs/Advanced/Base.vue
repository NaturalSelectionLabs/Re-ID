<template>
    <div class="advanced">
        <h1>Mange your RSS3 file.</h1>
        <div class="editor">
            <div class="header">
                <div class="title">Raw RSS3</div>
                <div class="button">
                    <Button
                        button-style="disabled"
                        button-size="xs"
                        @mouseenter="showEditTooltip = true"
                        @mouseleave="showEditTooltip = false"
                    >
                        Edit
                        <div class="tooltip">
                            <Tooltip
                                view-type="options"
                                text="Editing raw RSS3 file can result in unwanted chaos and therefore disabled here."
                                width-class="w-56"
                                v-show="showEditTooltip"
                            />
                        </div>
                    </Button>
                    <router-link to="/advanced/delete">
                        <Button button-style="danger" button-size="xs"> Delete </Button>
                    </router-link>
                </div>
            </div>
            <div class="textarea">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';
import Tooltip from '@/components/Tooltip.vue';
import IconView from '@/components/icons/IconView.vue';

@Options({
    components: {
        IconView,
        Tooltip,
        Button,
    },
})
export default class TabsAdvancedBase extends Vue {
    showEditTooltip: Boolean = false;
}
</script>

<style lang="postcss" scoped>
@layer components {
    .advanced {
        @apply mt-24;

        > h1 {
            @apply font-semibold text-2xl leading-5;
        }

        > .editor {
            @apply w-max h-auto bg-gray-light rounded p-4 mt-6;

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

                    > * > .tooltip {
                        @apply -left-20 top-2;
                    }

                    > * {
                        @apply mx-2;
                    }
                }
            }

            > .textarea {
                @apply w-180 h-160 bg-gray-light my-4;
            }
        }
    }
}
</style>
