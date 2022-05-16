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
        <Button :buttonStyle="balance > 0 ? 'primary' : 'disabled'" buttonSize="xl" @click="doMig()">Proceed</Button>
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
        // Do migration
        console.log('Start migration');

        // Finish
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
