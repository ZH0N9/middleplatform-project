<template>
  <div class="relative" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="cursor-pointer">
      <slot name="controlLevel"></slot>
    </div>

    <transition name="popdown">
      <div
        v-if="visible"
        class="absolute p-1 bg-white border rounded-lg m-0.5 dark:bg-zinc-800 dark:border-zinc-700"
        :class="positionEnum[position]"
      >
        <slot name="contentLevel"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { positionEnum } from "./styleTypes";
const props = defineProps({
  position: {
    type: String,
    default: "bottom",
    validator(val) {
      const positions = Object.keys(positionEnum);
      console.log(positions,val)
      if (!positions.includes(val)) {
        throw new Error("No Matched Position");
      }
      return true;
    },
  },
});
const visible = ref(false);

// 解决鼠标慢速移动 气泡消失的问题
let timer;
const onMouseEnter = () => {
    visible.value = true;
    if(timer){
        clearTimeout(timer);
    }
};
const onMouseLeave = () => {
    timer=setTimeout(()=>{
        visible.value = false;
        timer=null;
    },100)
};

</script>

<style lang="scss" scoped>
.popdown-enter-active,
.popdown-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.popdown-enter-from,
.popdown-leave-to {
  opacity: 0;
}
</style>
