<template>
    <div class="h-full overflow-auto flex flex-col">
        <!--navigation-->
        <navigation class="duration-500 sticky top-0 z-40"></navigation>
        <!--main list part-->
        <div class="w-screen min-w-[1000px] px-10 mx-auto bg-white dark:bg-zinc-800 duration-500 mt-2 flex-grow ">
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