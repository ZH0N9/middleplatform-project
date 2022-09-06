<template>
    <popover>
        <template #controlLevel>
            <div 
                class="w-[48.5px] h-[48.5px] flex justify-center items-center bg-white rounded-md"
            >
                <svg-icon name="theme-light" class="w-3 h-3" innerClass="fill-red-500" />
            </div>
        </template>
        <template #contentLevel>
            <ul class="flex flex-col justify-center z-20">
                <li 
                    class="flex items-center cursor-pointer rounded-md p-1.5 hover:bg-red-100 "
                    v-for="item in themeList"
                    :key="item.id"
                >
                    <svg-icon :name="item.icon" class="w-2 h-2 mr-1" :innerClass="{'fill-red-500':true}" />
                    <span class="text-base text-red-500 mx-1">{{item.text}}</span>
                </li>
            </ul>

        </template>
    </popover>
</template>

<script setup>
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from "../../../../constants";

    
    const themeList = [
        {
            id:THEME_LIGHT,
            icon:'theme-light',
            text:'Light'

        },
        {
            id:THEME_DARK,
            icon:'theme-dark',
            text:'Dark'
        },
        {
            id:THEME_SYSTEM,
            icon:'theme-system',
            text:'System'
        }
    ]


</script>

<style lang="scss" scoped>

</style>