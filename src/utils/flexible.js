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

// change rem
export const useRem = ()=>{
    // define max font size
    const MAX_REM = 30;
    // add event listener to html
    document.addEventListener('DOMContentLoaded',()=>{
        // 获取 html 标签
        const html = document.querySelector('html')
        // 获取根元素 fontSize 标准，屏幕宽度 / 10
        let fontSize = window.innerWidth/10
         // 获取到的 fontSize 不允许超过我们定义的最大值
        fontSize = fontSize>MAX_REM?MAX_REM:fontSize
        // 定义根元素（html）fontSize 的大小 （rem）
        html.style.fontSize = fontSize+'px'
    })
}
