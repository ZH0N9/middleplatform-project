<template>
    <div class="h-full bg-wihte overflow-auto dark:bg-zinc-800 duration-500 ">
        <navigation/>
        <div class="w-screen px-2 mt-0.5 relative">
            <list></list>
        </div>
    </div>
</template>

<script setup>
    import navigation from '@/components/navigation/index.vue'
    import list from '@/components/list/index.vue'

</script>

<style lang="scss" scoped>

</style>