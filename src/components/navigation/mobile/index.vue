<template>
    <div class="wrapper">
        <div class="bg-white sticky top-0 left-0 z-10 flex ">
            <div class="fixed top-[0.5px] left-0 pl-0.5 z-20 bg-white flex items-center shadow-r-white">
                <svg-icon name="heart-3d" class="w-5 h-5"/>
            </div>
            <ul class="relative flex items-stretch overflow-x-auto overflow-hidden p-1.5 text-sm text-red-500 font-medium">
                <li 
                    v-for="item in data" 
                    :key="item.id"
                    class="shrink-0 px-1.5 py-0.5 duration-200 z-10 first:ml-3.5 last:mr-3">
                    {{item.name}}
                </li>
            </ul>
            <div class="fixed top-[5px] right-[-1px] z-20  h-4 px-1 pt-0.5 bg-white flex items-center shadow-l-white">
                <svg-icon name="hamburger" class="w-3 h-3"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import SvgIcon from "../../../libs/svg-icon/index.vue";
    defineProps({
        data:{
            type:Array,
            required:true
        }
    })
    
</script>

<style lang='scss' scoped>
    .wrapper{
     
    }

</style>

