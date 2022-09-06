<template>
    <div class="h-screen flex flex-col relative">
        <pc-header class="h-header"></pc-header>
        <router-view />
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