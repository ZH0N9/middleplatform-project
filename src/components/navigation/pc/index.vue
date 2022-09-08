<template>
    <div class="w-full p-1 flex justify-center bg-white dark:bg-zinc-800">
        <ul
        class="w-[720px] relative mx-auto flex text-[12px] text-red-500 items-start dark:text-zinc-500
                font-medium flex-wrap justify-center px-2 overflow-hidden duration-300"
        :class="show?'h-[98px]':'h-[28px]'"
        ref="listTarget"
    >
        <!--sparrow-->
        <div 
            class="absolute right-1  cursor-pointer duration-300"
            :class="show?'bottom-1':'top-1'"
            @click="onShow"
        >
            <svg-icon :name="show?'fold':'unfold'" class="w-2 h-2" :innerClass="{'fill-red-500':true,'dark:fill-zinc-300':true}"/>
        </div>
        <li
        v-for="(item, index) in $store.getters.category"
        :key="item.id"
        class="shrink-0 px-1 py-0.5 duration-200 z-10 text-[14px] rounded-lg dark:text-zinc-500
                last:mr-4 cursor-pointer hover:bg-red-500 hover:text-white  dark:hover:bg-zinc-900"
        :class="{'bg-red-500':currentIndex===index,'text-white':currentIndex===index,'dark:bg-zinc-900':currentIndex===index}"
        @click="onClick(index)"
        >
            {{ item.name }}
        </li>
    </ul>
    </div>
    
</template>

<script setup>
    import { ref } from 'vue';
    const currentIndex=ref(0);
    const onClick=(index)=>{
        currentIndex.value=index;
    }
    const show = ref(false);
    const onShow=()=>{
        show.value = !show.value;
    }
 
</script>

<style lang='scss' scoped>
    .slider-enter-active,.slider-leave-active{
        transition:all 0.3s ease-in-out;
    }

</style>

