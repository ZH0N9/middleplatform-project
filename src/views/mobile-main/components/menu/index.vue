<template>
    <div class="py-2 px-1 h-[70vh] flex flex-col  bg-red-400 rounded-t-lg dark:bg-zinc-900">
        <h2 class="text-xl text-white font-bold mb-1 flex items-center justify-center dark:text-zinc-200">
            <svg-icon name="heart-3d" class="w-5 h-5" />
            所有分类
        </h2>
        <ul class="overflow-y-scroll" ref="ulTarget">
            <li 
                v-for="(item,index) in category" 
                :key="item.id"
                class="text-white text-lg duration-200 mb-1  active:text-red-400 px-1 active:dark:text-zinc-300"
                @click="$emit('onClick',index)"
            >
                <div class="bg-red-300 dark:bg-zinc-700 center w-full h-20px p-2 rounded-lg active:bg-zinc-500">
                    {{item.name}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import {onMounted,ref} from 'vue';
    import {useEventListener} from '@vueuse/core';
    defineProps({
        category:{
            type:Array,
            required:true
        },
    })
    const ulTarget = ref(null);
    onMounted(() => {
    // 解决 @vueuse/core 新版本会导致所有元素无法响应 touchmove 事件问题
    useEventListener(ulTarget, 'touchmove', (event) => {
        // 阻止事件冒泡
        event.stopPropagation()
    })
})

</script>

<style lang="scss" scoped>

</style>


  
  