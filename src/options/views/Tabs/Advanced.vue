<template>
    <div class="advanced">
        <div class="editor">
            <div class="header">
                <div class="title">Raw RSS3</div>
                <div class="button">
                    <Button button-style="secondary" button-size="xs"> Edit </Button>
                    <Button button-style="primary" button-size="xs"> Delete </Button>
                </div>
            </div>
            <textarea>
{
    "id": "0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944",
    "version": "rss3.io/version/v0.1.0-rc.0",
    "date_created": "2009-05-01T00:00:00.000Z",
    "date_updated": "2021-05-08T16:56:35.529Z",

    "profile": {
        "name": "DIYgod",
        "avatar": ["dweb://diygod.jpg", "https://example.com/diygod.jpg"],
        "bio": "写代码是热爱，写到世界充满爱！",
        "tags": ["demo", "lovely", "technology"]
    },

    "items": [{
        "id": "0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-item-1",
        "authors": ["0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944"],
        "summary": "Yes!!",
        "date_published": "2021-05-09T16:56:35.529Z",
        "date_modified": "2021-05-09T16:56:35.529Z",

        "type": "comment";
        "upstream": "0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-item-0";
    }, {
        "id": "0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-item-0",
        "authors": ["0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944"],
        "title": "Hello World",
        "summary": "Hello, this is the first item of RSS3.",
        "date_published": "2021-05-08T16:56:35.529Z",
        "date_modified": "2021-05-08T16:56:35.529Z",

        "contents": [{
            "file": ["dweb://never.html", "https://example.com/never.html"],
            "mime_type": "text/html"
        }, {
            "file": ["dweb://never.jpg"],
            "mime_type": "image/jpeg"
        }],

        "contexts": [{
            "type": "comment",
            "list": ["0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-item-1"],
        }, {
            "type": "like",
            "list": [],
        }]
    }],
    "items_next": "0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-items-0",

    "links": [{
        "type": "follow",
        "list": []
    }, {
        "type": "superfollow",
        "list": []
    }],
    "backlinks": [{
        "type": "follow",
        "list": []
    }],

    "assets": [{
        "type": "some experience point",
        "content": "100"
    }]
}
            </textarea>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';

@Options({
    components: {
        Button,
    },
})
export default class TabsAdvanced extends Vue {}
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
