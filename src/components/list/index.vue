<template>
    <div class="w-full">
        <long-list 
            class="w-full"
            v-model:loading="loading" 
            :finished="finished"
            @onLoad="getPexelData"
        >
            <water-fall
                class="w-full"
                :data="pexelList"
                key="_id"
                :col="isMobileTerminal?2:5"
                :preload="false"
            >
                <template v-slot="{item,width,index}">
                    <item :data="item" :width="width" @click="onClick(item,index)"></item>
                </template>
            </water-fall>
        </long-list>
    </div>
</template>
  
  <script setup>
    import { onMounted,ref } from 'vue';
    import { fetchPexel } from '../../api';
    import { isMobileTerminal } from '../../utils/flexible';
    import item from './item/index.vue'
    const pexelList = ref([])
    // default query params
    const query = ref({
        page:1,
        size:20
    })
    const loading=ref(false);
    const finished=ref(false);
    const getPexelData = async ()=>{
        // no data needed be requested
        if(finished.value){
            loading.value=false;
            return
        }

        const res = await fetchPexel(query);
        if(res){
            if(query.value.page===1){
                pexelList.value=res.list;
                console.log('first list',pexelList);
            }else{
                pexelList.value.push(...res.list);
                console.log('list',pexelList);
            }

            if(pexelList.value.length===res.total){
                finished.value=true;
            }
            loading.value=false;
            query.value.page+=1;
        }
    }
    console.log(query.value);  
    const onClick=(item,index)=>{
        console.log(item,index)
    }
  </script>
  
  <style lang="scss" scoped>


  </style>
  