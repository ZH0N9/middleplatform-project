<template>
    <div class="h-full">
        <search @search="onSearch" >
            <template #popdown>
                dd
            </template>
        </search>
    </div>
</template>

<script setup>
    import search from '@/components/search/index.vue'
    const onSearch=()=>{
        console.log('search');
    }
    
</script>

<style lang="scss" scoped>

</style>