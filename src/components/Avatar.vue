<template>
    <label
        :class="{
            'avatar-sm': size === 'sm',
            'avatar-md': size === 'md',
            'avatar-lg': size === 'lg',
        }"
        class="flex justify-center items-center cursor-pointer rounded overflow-hidden relative"
    >
        <img
            class="object-contain object-center absolute left-0 top-0 w-full h-full"
            :src="newUrl || url"
            v-show="newUrl || url"
            alt="Avatar Upload"
        />
        <IconAdd class="relative" iconColor="#fff" :width="iconSize" :height="iconSize" />
        <input type="file" class="hidden" accept="image/*" @change="preview" />
    </label>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import ipfs from '@/common/ipfs';
import IconAdd from './icons/IconAdd.vue';

@Options({
    props: {
        size: String,
        url: String,
    },
    components: {
        IconAdd,
    },
})
export default class Avatar extends Vue {
    file?: File;
    newUrl: string = '';
    iconSize: number = 22;
    size?: string;

    mounted() {
        if (this.size === 'sm') {
            this.iconSize = 14;
        } else if (this.size === 'lg') {
            this.iconSize = 36;
        }
    }

    preview(evt: any) {
        this.file = evt.target?.files?.[0];
        this.newUrl = URL.createObjectURL(this.file);
    }

    async upload() {
        if (this.file) {
            return ipfs.upload(this.file);
        } else {
            return null;
        }
    }
}
</script>

<style lang="postcss" scoped>
.avatar-sm {
    @apply w-14 h-14;
}
.avatar-md {
    @apply w-18 h-18;
}
.avatar-lg {
    @apply w-30 h-30;
}
</style>
