<template>
  <!--一级路由出口-->
  <router-view></router-view>
  {{isMobileTerminal}}
 
</template>

<script setup>
  import { isMobileTerminal } from './utils/flexible';
 
</script>

<style scoped lang="scss">

</style>
