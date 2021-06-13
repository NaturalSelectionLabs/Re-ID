<template>
    <div class="mb-15 filter blur-sm">
        <Input
            inputType="text"
            placeholderText="Private Key"
            viewType="options"
            v-model="privateKey"
            :disabled="true"
        />
    </div>
    <Button buttonStyle="primary" buttonSize="xl" @click="$router.push('/start/saveprivatekey')"
        >Export private key</Button
    >
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import RSS3 from '@/common/rss3';

@Options({
    components: {
        Button,
        Input,
    },
})
export default class StartPrivateKey extends Vue {
    privateKey: string = '';

    async mounted() {
        this.privateKey = (await RSS3.get()).persona.id;
        console.log(this.privateKey);
    }
}
</script>

<style lang="postcss" scoped></style>
