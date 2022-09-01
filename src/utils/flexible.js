/**
 *  @describe 判断当前是移动端还是PC端
 *  @author Zhong
 */
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import { PC_DEVICE_WIDTH } from "@/constants";


// Juedge PC or Mobile Terminal
export const isMobileTerminal = computed(()=>{
    /*
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
       navigator.userAgent
    */
   const { width } = useWindowSize();
   console.log(width.value);
   return width.value < PC_DEVICE_WIDTH;
});