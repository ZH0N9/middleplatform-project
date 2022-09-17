import { useIntersectionObserver } from "@vueuse/core"
export default{
    // element mounted 之后调用
    mounted(el){
        const imgSrc = el.src;
        el.src="";
        const {stop} = useIntersectionObserver(el,([{isIntersecting}])=>{
            if(isIntersecting){
                el.src=imgSrc;
                // 停止监听
                stop();
            }
        })

    }
    
}
