<template>
    <div class="text-2xl flex flex-row gap-3">
        <p>Your $CSB Balance:</p>
        <span>
            {{ balance }}
        </span>
        <span>
            <Button> (Refresh) </Button>
        </span>
    </div>
    <p class="flex justify-between mt-12">
        <Button :buttonStyle="balance > 0 ? 'primary' : 'disabled'" buttonSize="xl" @click="doMig()">{{
            isProcessing ? 'Processing...' : 'Proceed'
        }}</Button>
        <Button :buttonStyle="balance < 0.1 ? 'secondary' : 'disabled'" buttonSize="xl" @click="getCSB()"
            >Get some $CSB</Button
        >
    </p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';
import KeyContainer from '@/components/KeyContainer.vue';
import RSS3 from '@/common/rss3';

@Options({
    components: {
        Button,
        KeyContainer,
    },
})
export default class StartPrivateKey extends Vue {
    address: string = '';
    balance: number = 0.1;
    isProcessing: boolean = false;

    async mounted() {
        const rss3 = await RSS3.get();
        if (rss3) {
            this.address = rss3.persona.id;
        }
    }

    async doMig() {
        if (this.balance === 0) {
            console.log('Insufficient balance');
            return;
        }
        if (this.isProcessing) {
            console.log('Already processing');
            return;
        }
        // Do migration
        console.log('Start migration');
        this.isProcessing = true;
        const rss3 = await RSS3.get();
        const items = [];
        let fileID: string | undefined = '';
        while (fileID !== undefined) {
            const its = await rss3?.items.get();
            if (its?.items.length) {
                items.push(...its.items);
            }
            fileID = its?.items_next;
        }
        console.log('Got items', items);

        // Finish
        this.isProcessing = false;
        // this.next();
    }

    next() {
        this.$router.push('/start/congrats');
    }

    async getCSB() {
        if (this.balance >= 0.1) {
            console.log('Exceeds faucet limit');
            return;
        }
        window.open(`https://faucet.crossbell.io?address=${this.address}`, '_blank');
    }
}
</script>

<style lang="postcss" scoped></style>
