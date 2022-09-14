<template>
    <div class="bg-white dark:bg-zinc-800 p-1 rounded-lg duration-500">
        <!--img part + mask -->
        <div class="group relative cursor-zoom-in duration-200">
            <img 
                class="rounded-lg bg-transparent w-full" 
                :src="data.photo" 
                :style="{height:(width/data.photoWidth)*data.photoHeight+'px'}" 
            />
            <!--mask-->
            <div class="hidden opacity-0 group-hover:opacity-100 xl:block">
                <div class=" bg-zinc-400/50 absolute z-20 top-0 bottom-0 left-0 right-0 
                        rounded-lg">
                </div>
                <!--icons in mask-->
                <button-vue class="absolute top-2 left-2 z-30" shape="round">Share</button-vue>
                <button-vue class="absolute top-2 right-2 z-30" shape="round" icon="heart" />
                <button-vue class="absolute bottom-2 left-2 z-30" shape="round" icon="download" />
                <button-vue class="absolute bottom-2 right-2 z-30" shape="round" icon="full" />
            </div>

        </div>

        <!--title part-->
        <p class="text-sm text-zinc-800 font-bold dark:text-zinc-300 px-1 mt-1">{{data.title}}</p>
        <!--author part-->
        <div class="flex items-center mt-1 px-1">
            <img class="w-2 h-2 rounded-full" :src="data.avatar" alt=""/>
            <p class="text-sm text-zinc-500 ml-1">{{data.author}}</p>
        </div>

    </div>


</template>
  
  <script setup>
    const props = defineProps({
        data:{
            type:Object,
            required:true
        },
        width:{
            type:Number
        }
    })
  </script>
  
  <style lang="scss" scoped>
    
  </style>
  