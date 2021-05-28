<template>
    <Icon
        iconName="view"
        :width="width"
        :height="height"
        :iconColor="iconColor"
    >
        <path
            d="M9,14.7c5.4,0,9-4.4,9-5.7c0-1.3-3.6-5.7-9-5.7C3.7,3.3,0,7.7,0,9C0,10.3,3.7,14.7,9,14.7z M9,13.2c-4,0-7.2-3.3-7.2-4.2
	c0-0.8,3.1-4.2,7.2-4.2c4,0,7.2,3.5,7.2,4.2C16.2,9.9,13,13.2,9,13.2z M9,12.4c1.9,0,3.4-1.5,3.4-3.4c0-1.9-1.5-3.4-3.4-3.4
	C7.1,5.6,5.6,7.1,5.6,9C5.6,10.8,7.1,12.4,9,12.4z M9,10.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1
	C10.1,9.6,9.6,10.1,9,10.1z"
        />
    </Icon>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Icon from '@components/icons/Icon.vue';

@Options({
    components: {
        Icon,
    },
    props: {
        width: Number,
        height: Number,
        iconColor: String,
    },
})
export default class IconView extends Vue {
    width: Number = 18;
    height: Number = 18;
    iconColor: String = '#282828';
}
</script>
