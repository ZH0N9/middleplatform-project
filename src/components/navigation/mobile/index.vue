<template>
    <div class="bg-white sticky top-0 z-10 flex dark:bg-zinc-900">
      <div
        class="absolute top-[0.5px] left-0 pl-0.5 z-20 bg-white flex items-center shadow-r-white 
              dark:bg-zinc-900 dark:shadow-r-zinc"
      >
        <svg-icon name="heart-3d" class="w-5 h-5" />
      </div>

      <ul
        class="relative flex items-stretch overflow-x-auto overflow-hidden p-1.5 ml-5 
               text-sm text-red-500 font-medium dark:text-zinc-400 dark:bg-zinc-900"
        ref="listTarget"
      >
        <li
          ref="sliderTarget"
          :style="sliderStyle"
          class="absolute bg-red-500 h-[20px] rounded-lg duration-200 dark:bg-zinc-800"
        ></li>
        <li
          v-for="(item, index) in $store.getters.category"
          :key="item.id"
          class="shrink-0 px-1.5 py-0.5 duration-200 z-10 last:mr-4 dark:text-zinc-200"
          :class="{
            'text-white': index === currentIndex,
          }"
          @click="onClick(index, $event)"
          :ref="getItems"
        >
          {{ item.name }}
        </li>
      </ul>
      <div
        class="absolute  top-[5px] right-[-1px] z-20 h-4 px-1 pt-0.5 bg-white flex items-center shadow-l-white 
              dark:bg-zinc-900 dark:shadow-l-zinc"
        @click="onVisible"
      >
        <svg-icon name="hamburger" class="w-3 h-3" />
      </div>
    </div>
  <popup v-model:visible="visible">
    <menu-vue :category="$store.getters.category" @onClick="onClick" />
  </popup>
</template>

<script setup>
import menuVue from '@/views/mobile-main/components/menu/index.vue';
import { onBeforeUpdate, onMounted, ref, watch } from "vue";
import { useScroll } from "@vueuse/core";
import { useStore } from 'vuex';
const store=useStore();
const category = store.getters.category;

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
  width: "52px",
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
const onClick = (index, e) => {
  currentIndex.value = index;
};
watch(currentIndex, (newIndex) => {
  const currentItem = listItems.value[newIndex];
  // get bounding rect
  const { width, left } = currentItem.getBoundingClientRect();
  const totalTranslateDistance = listScrollLeft.value + left - originLeft;
  sliderStyle.value = {
    transform: `translateX(${totalTranslateDistance}px)`,
    width: width + "px",
  };
  // 点击menu item时 需要自动移动列表以显示区域外的item
  if(visible.value){
    visible.value=false;
    listTarget.value.scrollLeft = left+listScrollLeft.value- originLeft;
  }

});

// show popup element
const visible=ref(false);
const onVisible=()=>{
    visible.value=true;
}


</script>

<style lang="scss" scoped></style>
