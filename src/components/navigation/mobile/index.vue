<template>
  <div class="wrapper">
    <div class="bg-white sticky top-0 left-0 z-10 flex">
      <div
        class="fixed top-[0.5px] left-0 pl-0.5 z-20 bg-white flex items-center shadow-r-white"
      >
        <svg-icon name="heart-3d" class="w-5 h-5" />
      </div>

      <ul
        class="relative flex items-stretch overflow-x-auto overflow-hidden p-1.5 ml-5 text-sm text-red-500 font-medium"
        ref="listTarget"
      >
        <li
          ref="sliderTarget"
          :style="sliderStyle"
          class="absolute bg-red-500 h-[20px] rounded-lg duration-200"
        ></li>
        <li
          v-for="(item, index) in data"
          :key="item.id"
          class="shrink-0 px-1.5 py-0.5 duration-200 z-10 last:mr-3"
          :class="{
            'text-white': index === currentIndex,
          }"
          @click="handeClick(index, $event)"
          :ref="getItems"
        >
          {{ item.name }}
        </li>
      </ul>
      <div
        class="fixed top-[5px] right-[-1px] z-20 h-4 px-1 pt-0.5 bg-white flex items-center shadow-l-white"
      >
        <svg-icon name="hamburger" class="w-3 h-3" />
      </div>
    </div>
  </div>
  <div>{{ listScrollLeft }}</div>
</template>

<script setup>
import SvgIcon from "../../../libs/svg-icon/index.vue";
import { onBeforeUpdate, onMounted, ref, watch } from "vue";
import { useScroll } from "@vueuse/core";
defineProps({
  data: {
    type: Array,
    required: true,
  },
});
// slider element
const sliderTarget = ref(null);
// ul elememt
const listTarget = ref(null);
// get ul scroll left
const { x: listScrollLeft } = useScroll(listTarget);
const currentIndex = ref(0);
const listItems = ref([]);
const sliderStyle = ref({
  transform: "translateX(0px)",
  width: "50px",
});
// list origin left
let originLeft = 0;
// get list item (when there is a updation(move or data update), it will be executed again)
const getItems = (item) => {
  if (item) {
    listItems.value.push(item);
    if (originLeft === 0) {
      // get origin left offset
      const { left } = listItems.value[0].getBoundingClientRect();
      // only get once
      originLeft = left;
    }
  }
};

// before data updated, clear current item lists
onBeforeUpdate(() => {
  listItems.value.length = 0;
});
const handeClick = (index, e) => {
  currentIndex.value = index;
};
watch(currentIndex, (newIndex) => {
  const currentItem = listItems.value[newIndex];
  // get bounding rect
  const { width, left } = currentItem.getBoundingClientRect();
  const { left: scrollleft } = sliderTarget.value.getBoundingClientRect();
  const totalTranslateDistance = listScrollLeft.value + left - originLeft;
  sliderStyle.value = {
    transform: `translateX(${totalTranslateDistance}px)`,
    width: width + "px",
  };
});
</script>

<style lang="scss" scoped></style>
