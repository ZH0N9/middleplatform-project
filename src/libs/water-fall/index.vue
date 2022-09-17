<template>
    <div 
        class="relative"
        ref="containerTarget"
        :style="{
            height:containerHeight+'px'
        }"
    >
        <template v-if="colWidth!==0&&data.length">
            <div
                v-for="(item,index) in data"
                :key="key?item[key]:index"
                class="waterfall-item absolute duration-300"
                :style="{
                    width:colWidth+'px',
                    left:item._style?.left+'px',
                    top:item._style?.top+'px'
                }"
            >
                <slot :item="item" :index="index" :width="colWidth"></slot>
            </div>
        </template>

        <!--loading-->
        <div v-else class="w-full flex justify-center">
            <svg-icon name="loading" class="w-5 h-5 animate-spin" color="#ff0000" :innerClass="{'dark:fill-zinc-300':true}"/>
        </div>
    </div>
    
</template>

<script setup>
    import { ref,computed,watch,onMounted, onUnmounted,nextTick } from 'vue';
    import { getAllImgElements,getAllImgSrc,loadAllImg,getMinHeightCol,getMinHeight,getMaxHeight } from '@/utils/waterfall.js'
    const props = defineProps({
        // data source
        data:{
            type:Array,
            required:true
        },
        // identifier
        key:{
            type:String,
        },
        // column number
        col:{
            type:Number,
            default:4
        },
        // column space
        colSpacing:{
            type:Number,
            default:5
        },
        // row space
        rowSpacing:{
            type:Number,
            default:10
        },
        // item pictrue preload
        preload:{
            type:Boolean,
            default:true
        }
    })
    const screenWidth = ref(0);
    const containerTarget=ref(null);
    const colObjHeight= ref({});
    const containerWidth = ref(0);
    const containerHeight=ref(0);
    const containerLeft = ref(0);
    const colWidth = ref(0);
    const colTotalSpacing=computed(()=>{
        return (props.col-1)*props.colSpacing
    })

    onMounted(()=>{
        // get colomn width
        useColumnWidth();
        window.onresize=()=>{
            screenWidth.value = document.body.clientWidth;
        }
    })
    onUnmounted(()=>{
        // delete _style before unmounted
        props.data.forEach(item=>{
            item._style=null;
        })
    })

    watch(
        ()=>props.data,
        (val)=>{
            nextTick(()=>{
                const reset = val.every(item=>!item._style);
                if(reset){
                    // reset container height
                    useColObjHeight();
                }
                useItemHeights();
        })},
        {
            deep:true,
            immediate:true
        }
    )
    watch(
        ()=>props.col,
        ()=>{
            if(props.preload){
                colWidth.value=0;
                setTimeout(reset,200)
                
            }else{
                console.log('body',window.innerWidth)
                reset();
            }
        }
    )
    const reset = ()=>{
            itemHeights.value=[];
            useColumnWidth();
            console.log(colWidth.value);
            props.data.forEach(item=>{
                item._style =null;
            });
    }
    // record height of each column (the height of the most highest item)
    const useColObjHeight = ()=>{
        for(let i=0;i<props.col;i++){
            colObjHeight.value[i]=0;
        }
    }
    // calculate container width
    const useContainerWidth = ()=>{
        const offsetWidth = containerTarget.value.offsetWidth;
        console.log('off',offsetWidth)
        const {paddingLeft,paddingRight} = getComputedStyle(containerTarget.value,null)
        containerLeft.value = parseFloat(paddingLeft);
        containerWidth.value = offsetWidth - parseFloat(paddingLeft)-parseFloat(paddingRight);
    }
    // calculate column width
    const useColumnWidth=()=>{
        useContainerWidth();
        colWidth.value = (containerWidth.value-colTotalSpacing.value)/props.col;
    }


    const itemHeights = ref([]);
    const useItemLocation = ()=>{
        // calculate position for each item
        props.data.forEach((item,index)=>{
            if(item._style){
                return 
            }
            item._style = {};
            // left
            item._style.left = getItemLeft();
            // top
            item._style.top = getItemTop();
            // 对应列高需要自增
            increaseColHeight(index);
        })
        containerHeight.value = getMaxHeight(colObjHeight.value);
    }
    // 对应列高需要自增
    const increaseColHeight = (index)=>{
        const currenMinCol = getMinHeightCol(colObjHeight.value);
        colObjHeight.value[currenMinCol]+=itemHeights.value[index]+props.rowSpacing;
    }
    // calculate left poisition for next item
    const getItemLeft= ()=>{
        // find the col index of the minimum in current col
        const currenMinCol = getMinHeightCol(colObjHeight.value);
        return containerLeft.value +(currenMinCol*(props.colSpacing+colWidth.value))
    }
     // calculate top poisition for next item
    const getItemTop=()=>{
        const currMinHeight = getMinHeight(colObjHeight.value);
        return currMinHeight+props.rowSpacing;

     }

    const useItemHeights = ()=>{
        const itemElements = [...document.getElementsByClassName('waterfall-item')];
        itemHeights.value=[];
          // preload img
        if(props.preload){
            const imgElements = getAllImgElements(itemElements);
            const imgSrc = getAllImgSrc(imgElements);   
            // wait until img loaded
            loadAllImg(imgSrc).then((res)=>{
                itemElements.forEach(el=>{
                    itemHeights.value.push(el.offsetHeight);
                })
                useItemLocation()
            })
        // no need preloading
        }else{
            itemElements.forEach(el=>{
                itemHeights.value.push(el.offsetHeight);
            })  
            useItemLocation()
        }
    }
   



</script>

<style lang="scss" scoped>

</style>