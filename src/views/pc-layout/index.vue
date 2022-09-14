<template>
    <div class="h-screen flex flex-col overflow-auto bg-wihte dark:bg-zinc-800 duration-500 ">
        <pc-header class="h-header duration-500"></pc-header>
        <router-view/>
        <float class="fixed right-3 bottom-10"></float>
    </div>
</template>

<script setup>
    import pcMain from './main/index.vue';
    import pcHeader from './header/index.vue'
    import float from '@/components/float/index.vue';

</script>

<style lang="scss" scoped>

</style>