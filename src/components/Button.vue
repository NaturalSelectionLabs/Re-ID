<template>
    <button 
        class="btn"
        :class="{
        'btn-primary':buttonStyle==='primary', 
        'btn-secondary':buttonStyle==='secondary',
        'btn-menu-item':buttonStyle==='menuItem',
        'btn-outlined':buttonStyle==='outlined',
        'btn-xxs':buttonSize==='xxs',
        'btn-xs': buttonSize==='xs',
        'btn-sm': buttonSize==='sm',
        'btn-md': buttonSize==='md',
        'btn-lg': buttonSize==='lg',
        'btn-xl': buttonSize==='xl',
        'btn-xxl': buttonSize==='xxl',
        }">
        {{buttonText}}
    </button>
</template>


<script lang="ts">
// import { defineComponent, PropType } from 'vue'
import { Vue, Options } from 'vue-class-component'

@Options({
    props: {
        buttonStyle: String,
        buttonText: String,
        buttonSize: String,
    }
})

export default class Button extends Vue{

        buttonStyle!: String;
        buttonText!: String;
        buttonSize!: String;

    data(){
        return {
            buttonText: this.buttonText,
            buttonStyle: this.buttonStyle,
            buttonSize: this.buttonSize
        }}
}

</script>




<style lang="postcss">

@layer components {
.btn {
    @apply text-left;
}
.btn-primary {
    @apply bg-primary text-white;
}

.btn-secondary {
    @apply bg-primary bg-opacity-15 text-primary;
}

/* popup.html [...] menu each item */
.btn-menu-item {
    @apply bg-transparent text-primary;

    &:hover {
        @appy bg-primary bg-opacity-15;
    }
}

.btn-outlined {
    @apply bg-white border border-primary text-primary;
    &:active {
        @apply bg-primary border border-primary text-white;
    }
}


/* popup.html [...] button */
.btn-xxs {
    @apply w-8 h-4 rounded-sm px-11 py-3 font-regular text-xs;
}

/* popup.html [...] menu each item */
.btn-xs {
    @apply w-26 h-6 rounded-sm px-12 py-5 font-regular text-xs;
}

/* options.html raw rss3 code block buttons */
.btn-sm {
    @apply w-21 h-6 rounded-sm px-15 py-5 font-medium text-xs;
}

/* popup.html small button - [Invite] [Expand]; 
   options.html small buttons -  [Personas] [Log out] */
.btn-md { 
    @apply w-27 h-7 rounded-sm px-14 py-7 font-medium text-xs;
}

/* popup.html main button */
.btn-lg {
    @apply w-55 h-18 rounded px-16 py-10 font-semibold text-xs;
}

/* options.html main button */
.btn-xl {
    @apply w-89 h-18 rounded px-32 py-20 font-semibold;
}

/* options.html extended button for long text*/
.btn-xxl {
    @apply w-120 h-18 rounded px-32 py-20font-semibold;
}

}

</style>