<template>
    <svg aria-hidden="true">
        <use :xlink:href="symbolId" :fill="props.color" :class="props.innerClass"/>
    </svg>
</template>

<script setup>
    import {computed} from 'vue'
    const props=defineProps({
        name:{
            type:String,
            required:true

        },
       color:{
            type:String,
        },
        innerClass:{
            type:String
        }
    })
    const symbolId = computed(()=>`#icon-${props.name}`)
    
</script>

<style lang='scss' scoped>

</style>

