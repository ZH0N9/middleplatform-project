<template>
    <button 
        class="text-sm text-center flex justify-center items-center duration-200"
        :class="[
            typeEnum[type],
            sizeEnum[size],
            shapeEnum[shape],
            selfClass,
            {
                'active:scale-105':isAnimated&&!loading,
                'cursor-not-allowed':loading
            }
        ]"
        :disabled="loading"
        @click.stop="onBtnClick"
    >
    <!--icon-->
        <svg-icon 
            v-if="icon && !loading" 
            :name="icon" 
            :color="color?color:iconTypeEnum[type].fill"
            :class="iconTypeEnum[type].cls"
            :innerClass="iconStyle"
        >
        </svg-icon>
    <!--loading-->
        <svg-icon
            v-if="loading"
            name="loading"
            :color="color?color:iconTypeEnum[type].fill"
            class="w-2 h-2 animate-spin"
        >
        </svg-icon>
    <!--text-->
        <slot  v-if="!loading">
        </slot>
    </button>

</template>

<script setup>
    import { typeEnum,sizeEnum,shapeEnum,iconTypeEnum } from './styleTypes';
    import { CLICK_EVENT } from '../../constants';
    
    const emits = defineEmits([CLICK_EVENT])
    const props=defineProps({
        // icon name
        icon:{
            type:String,
            default:null
        },
        // icon color
        color:{
            type:String,
        },
        // icon style
        iconStyle:{
            type:Object,
            default:{}
        },
        // self defined style
        selfClass:{
            type:Object,
            default:{}
        },
        // button type
        type:{
            type:String,
            default:'primary',
            validator(val){
                const keys = Object.keys(typeEnum);
                if(!keys.includes(val)){
                    throw new Error('No matched type')
                }
                return true;
            }
        },
        // button size
        size:{
            type:String,
            default:'default',
            validator(val){
                const keys = Object.keys(sizeEnum);
                if(!keys.includes(val)){
                    throw new Error('No matched size')
                }
                return true;
            }

        },
        shape:{
            type:String,
            default:'default',
            validator(val){
                const keys = Object.keys(shapeEnum);
                if(!keys.includes(val)){
                    throw new Error('No matched shape')
                }
                return true;
            }
        },
        // button shape
        loading:{
            type:Boolean,
            default:false
        },
        isAnimated:{
            type:Boolean,
            default:true
        }
        
    })

    // handle click event
    const onBtnClick=()=>{
        // if lodading, return
        if(props.loading){
            return
        }
        console.log('inner click')
        emits(CLICK_EVENT);
    }
    
    
</script>

<style lang='scss' scoped>

</style>

