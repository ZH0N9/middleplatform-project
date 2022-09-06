<template>
    <div class="w-full p-1 flex justify-center bg-white">
        <ul
        class="w-[720px] relative mx-auto flex text-[12px] text-red-500 items-start
                font-medium flex-wrap justify-center px-2 overflow-hidden duration-200"
        :class="show?'h-[98px]':'h-[30px]'"
        ref="listTarget"
    >
        <!--sparrow-->
        <div 
            class="absolute right-1  cursor-pointer"
            :class="show?'bottom-1':'top-1'"
            @click="onShow"
        >
            <svg-icon :name="show?'fold':'unfold'" class="w-2 h-2" :innerClass="{'fill-red-500':true}"/>
        </div>
        <li
        v-for="(item, index) in $store.getters.category"
        :key="item.id"
        class="shrink-0 px-1 py-0.5 duration-200 z-10 text-[14px] rounded-lg 
                last:mr-4 cursor-pointer hover:bg-red-500 hover:text-white"
        :class="{'bg-red-500':currentIndex===index,'text-white':currentIndex===index}"
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

