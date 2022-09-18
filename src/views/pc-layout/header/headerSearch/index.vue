<template>
    <div class="h-full">
        <search v-model:searchInput="searchInput" @search="onSearch" @clear="onClear" >
            <template #popdown>
                <!--Search hint part-->
                <hint 
                    v-show="searchInput!==''"
                    :searchHint="searchInput"
                    @itemClick="onSearch"
                />
                
            </template>
        </search>
    </div>
</template>

<script setup>
    import search from '@/components/search/index.vue'
    import hint from './hint/index.vue'
    import { ref } from 'vue';
    const searchInput=ref('');

    const onClear=()=>{
        searchInput.value='';
    }

    const onSearch=(searchText)=>{
        if(searchText){
            searchInput.value=searchText;
        }
        console.log(searchText);
    }
    
</script>

<style lang="scss" scoped>

</style>