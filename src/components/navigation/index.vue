<template>

  <mobile-navigation v-if="isMobileTerminal"  />
  <pc-navigation v-else/>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import mobileNavigation from "./mobile/index.vue";
import pcNavigation from "./pc/index.vue";
import { isMobileTerminal } from "@/utils/flexible";
import { useStore } from "vuex";


const store = useStore();
onMounted(()=>{
  store.dispatch('category/getCategoryData')
})
</script>

<style lang="scss" scoped></style>
