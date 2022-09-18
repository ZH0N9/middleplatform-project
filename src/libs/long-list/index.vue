<template>
    <div>
        <slot></slot>
        <!--loading part-->
        <div ref="loadingTarget" class="my-4 h-6">
            <svg-icon 
                name="infinite-load" 
                class="w-4 h-4 animate-spin mx-auto" 
                v-show="loading" 
                :innerClass="{'fill-red-500':true,'dark-fill-zinc-300':true}"
            />

            <div class="w-full" v-if="finished">
                <p class="w-full h-[1px] bg-zinc-200"></p>
                <p class="text-center py-2 text-base text-zinc-500">END</p>
            </div>
        </div>

    </div>
    
</template>

<script setup>
    import { ref ,watch } from 'vue';
    import { useIntersectionObserver } from '@vueuse/core';
    const props = defineProps({
        loading:{
            type:Boolean,
            required:true
        },
        finished:{
            type:Boolean,
            default:false
        }
    })
    const emits = defineEmits(['onLoad','update:loading'])
    const loadingTarget = ref(null);
    const isIntersect = ref(false);
    // emit load function
    const emitLoad= ()=>{
        // if loading part is in the view and current no loading and data is not been loaded at all
        if(isIntersect.value&&!props.loading&&!props.finished){
            emits('update:loading',true);
            emits('onLoad');
        }
    }
    useIntersectionObserver(loadingTarget,([{isIntersecting}],observerElement)=>{
        // current loading part is in the view 
        isIntersect.value = isIntersecting;
        emitLoad();
    })

    watch(
        ()=>props.loading,
        // 当loading的值变化的时候 触发emitLoad进行判断需不需要加载更多
        // 必须要等页面重新渲染 且useIntersectionObserver重新出发 更新isIntersect的值之后再触发
        (val)=>{
            setTimeout(emitLoad,100);
        }
    )

</script>