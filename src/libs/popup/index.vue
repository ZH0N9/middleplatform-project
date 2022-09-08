<template>
  <div class="wrapper">
    <teleport to="body">
      <!--mask-->
      <transition name="fade">
        <div
          v-if="visible"
          class="z-30 absolute top-0 left-0 bottom-0 right-0 bg-zinc-400/50"
          @click="emits('update:visible', false)"
        ></div>
      </transition>

      <!--content-->
      <transition name="pop-up-down">
        <div
          v-if="visible"
          v-bind="$attrs"
          class="z-40 absolute bottom-0 left-0 right-0 bg-white rounded-t-lg dark:bg-zinc-800"
        >
          <slot></slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { useScrollLock } from "@vueuse/core";
import { watch } from "vue";
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});
// emit event to parent element to change "visible"
const emits = defineEmits(["update:visible"]);

// lock the scroll function of body
const locked = useScrollLock(document.body);
watch(()=>props.visible,(newValue)=>{
    locked.value = newValue;
},{immediate:true})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.pop-up-down-enter-active,
.pop-up-down-leave-active {
  transition: all 0.4s ease;
}
.pop-up-down-enter-from,
.pop-up-down-leave-to {
  transform: translateY(100%);
}
</style>
