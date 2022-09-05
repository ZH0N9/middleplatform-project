<template>
  <mobile-navigation v-if="isMobileTerminal" :category="categoryData" />
  <pc-navigation v-else :category="categoryData" />
</template>

<script setup>
import { ref, reactive } from "vue";
import mobileNavigation from "./mobile/index.vue";
import pcNavigation from "./pc/index.vue";
import { isMobileTerminal } from "@/utils/flexible";
import { fetchCategory } from "@/api/category";
import { ALL_CATEGORY_ITEM } from "../../constants";
const categoryData = ref([]);
const getCategoryData = async () => {
  const res = await fetchCategory();
  if (res) {
    const { categorys } = res;
    categoryData.value = categorys;
  }
  categoryData.value.unshift(ALL_CATEGORY_ITEM);
};
getCategoryData();
</script>

<style lang="scss" scoped></style>
