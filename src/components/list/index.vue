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
                    <item 
                        :data="item" 
                        :width="width" 
                        @click="onClick(item,index)" 
                    >
                    </item>
                </template>
            </water-fall>
        </long-list>
    </div>
</template>
  
  <script setup>
    import { onMounted,ref,watch } from 'vue';
    import { fetchPexel } from '../../api';
    import { useStore } from 'vuex';
    import { isMobileTerminal } from '@/utils/flexible';
    import item from './item/index.vue'
import currCategory from '../../store/modules/currCategory';

    const store = useStore();
    const pexelList = ref([])
    // default query params
    const query = ref({
        page:1,
        size:20
    })
    const loading=ref(false);
    const finished=ref(false);

    const resetQuery = (newQuery)=>{
        query.value = {...query.value,...newQuery};
        //reset data
        pexelList.value=[];
        finished.value = false;
    }
    const getPexelData = async ()=>{
        // no data needed be requested
        if(finished.value){
            loading.value=false;
            return
        }

        const res = await fetchPexel(query.value);
        if(res){
            if(query.value.page===1){
                pexelList.value=res.list;
            }else{
                pexelList.value.push(...res.list);
            }

            if(pexelList.value.length===res.total){
                finished.value=true;
            }
            loading.value=false;
            query.value.page+=1;
        }
    }
    const onClick=(item,index)=>{
        console.log(item,index)
    }

    watch(
        ()=>store.getters.currentCategory,
        (currCategory)=>{
            resetQuery({
                page:1,
                categoryId:currCategory.id
            })
        }

    )
  </script>
  
  <style lang="scss" scoped>


  </style>
  