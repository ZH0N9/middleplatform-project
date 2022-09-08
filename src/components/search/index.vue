<template>
  <div
    class="group flex items-center rounded-xl relative h-full duration-500 hover:bg-red-200/30 px-0.5"
    ref="containerTarget"
  >
    <!--search icon-->
    <svg-icon class="absolute w-2 h-2 left-2.5" name="search" color="#707070">
    </svg-icon>
    <!--search input-->
    <input
      class="search w-full h-[42px] block rounded-xl pl-5 text-[16px] tracking-wide 
           text-zinc-500 caret-zinc-400 outline-0 bg-zinc-100 border border-zinc-200 
           duration-500 group-hover:bg-white group-hover:border-zinc-400 pr-[25%]
           dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700 dark:group-hover:bg-zinc-900
           dark:group-hover:border-zinc-700"
      type="text"
      placeholder="Search"
      v-model="searchInput"
      @input="onInput"
      @focus="onFocus"
      
    />
    <div class="absolute right-1 flex items-center">
        <!--delete button-->
        <svg-icon
            class="w-1.5 h-1.5 cursor-pointer duration-500 mr-1"
            name="input-delete"
            v-show="searchInput"
            @click="onClear"
        >
        </svg-icon>
        <div class="opacity-0 group-hover:opacity-100 duration-500 flex items-center">
            <!--separated line-->
            <span
            class="h-2 w-[1px] bg-zinc-400 mr-1.5"
            >
            </span>
            <!--search button-->
            <button-vue
                size="large" 
                shape="circle"
                icon="search"
                :loading="false"
                @click="onSearch"
            >
                Search
            </button-vue>

        </div>
    </div>

    <!--popdown area-->
    <transition name="pop-down">
      <div
        ref="popdownContainer"
        v-if="$slots.popdown&&isFocus"
        class="absolute w-full max-h-[320px] top-[54px] left-0 bg-white text-base p-2 overflow-auto rounded-lg border 
             border-zinc-200 hover:shadow-sm duration-200 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
      >
        <slot name="popdown"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { CLEAR_EVENT, FOUCS_EVENT, SEARCH_EVENT } from "../../constants";
// emit events
const emits = defineEmits([SEARCH_EVENT,FOUCS_EVENT,CLEAR_EVENT]);
const searchInput=ref("");
const containerTarget =ref(null);
// input focused or not
const isFocus =ref(false);

// clear all input content
const onClear=()=>{
    searchInput.value='';
    emits(CLEAR_EVENT,'');
}
// update search input content when input
const onInput=(e)=>{
    searchInput.value=e.target.value;
}
// update focus state when input focused
const onFocus = ()=>{
    isFocus.value=true;
    emits(FOUCS_EVENT,'');
}
// emit search event
const onSearch=()=>{
    emits(SEARCH_EVENT,searchInput.value);
}
// click outside area, hide the popdown
onClickOutside(containerTarget,(e)=>{
    isFocus.value = false;
})

</script>

<style lang="scss" scoped>
.pop-down-enter-active,.pop-down-leave-active {
  transition: all 0.2s ease-in-out;
}
.pop-down-enter-from,.pop-down-leave-to {
   opacity: 0;
   transform: translateY(50px);
}
</style>
