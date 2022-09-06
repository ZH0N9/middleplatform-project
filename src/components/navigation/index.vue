<template>
  <!--
  <mobile-navigation v-if="isMobileTerminal"  />
  -->
  <pc-navigation />
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
/*const getCategoryData = async () => {
  const res = await fetchCategory();
  if (res) {
    const { categorys } = res;
    categoryData.value = categorys;
  }
  categoryData.value.unshift(ALL_CATEGORY_ITEM);
};
getCategoryData();*/
</script>

<style lang="scss" scoped></style>
