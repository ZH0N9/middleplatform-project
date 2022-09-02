<template>
    <mobile-navigation v-if="isMobileTerminal" :data="categoryData"/> 
    <pc-navigation v-else :data="categoryData" />

</template>

<script setup>
    import { ref,reactive } from 'vue'
    import mobileNavigation from './mobile/index.vue'
    import pcNavigation from './pc/index.vue'
    import { isMobileTerminal } from '@/utils/flexible'
    import { fetchCategory } from '@/api/category'
    const categoryData=ref([])
    const getCategoryData = async ()=>{
        const res = await fetchCategory();
        if(res){
            const {categorys} = res
            categoryData.value= categorys;
            console.log(categoryData);
        }
    }
    getCategoryData();
</script>

<style lang='scss' scoped>

</style>

