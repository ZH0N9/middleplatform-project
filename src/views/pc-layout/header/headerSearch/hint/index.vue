<template>
    <div class="w-full flex flex-col">
        <div
            v-for="item in hintData"
            v-html="getHighlightText(item)"
            :key="item"
            class="group-hint flex-grow p-1 text-base text-red-500 font-bold rounded-lg cursor-pointer duration-300
                 hover:bg-red-300 dark:text-zinc-400 dark:hover:bg-zinc-900"
            @click="onClick(item)"
        >
        </div>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue';
    import { fetchSearchHint } from '../../../../../api';
    import {ITEM_CLICK_EVENT} from '@/constants';
    import { watchDebounced } from '@vueuse/shared';
    
    const emits = defineEmits([ITEM_CLICK_EVENT])
    const props=defineProps({
        searchHint:{
            type:String,
            required:true
        }
    })
    const hintData = ref([])
    // get hind data
    const getHintData = async ()=>{
        if(!props.searchHint){
            return;
        }
        console.log(props.searchHint);
        const {result}=  await fetchSearchHint({q:props.searchHint})
        hintData.value= result;
    }
    // watch the search text changing
    watchDebounced(
        ()=>props.searchHint,
        getHintData,
        {
            immediate:true,
            debounce:500
        }
    )
    // precess hightlight keywords
    const getHighlightText = (hintText)=>{
        const highlight = `<span class="text-red-600 dark:text-zinc-500 group-hint-hover:text-white">${props.searchHint}</span>`
        const reg =  new RegExp(props.searchHint,'gi');
        return hintText.replace(reg,highlight);
    }
    // click event
    const onClick=(item)=>{
        emits(ITEM_CLICK_EVENT,item);

    }
    // search event
    const onSearch=()=>{
        console.log('search');
    }
    console.log('hint',props.searchHint)
    
</script>

<style lang="scss" scoped>
</style>