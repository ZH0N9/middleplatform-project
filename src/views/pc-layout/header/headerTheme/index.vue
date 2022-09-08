<template>
    <popover>
        <template #controlLevel>
            <div 
                class="w-[48.5px] h-[48.5px] flex justify-center items-center bg-white rounded-md dark:bg-zinc-900"
            >
                <svg-icon :name="themeName" class="w-3 h-3" :innerClass="{'fill-red-500':true,'dark:fill-zinc-300':true}" />
            </div>
        </template>
        <template #contentLevel>
            <ul class="flex flex-col justify-center  dark:bg-zinc-800 ">
                <li 
                    class="flex items-center cursor-pointer rounded-md p-1.5 hover:bg-red-100 dark:hover:bg-zinc-500"
                    v-for="item in themeList"
                    :key="item.id"
                    @click="onChange(item)"
                >
                    <svg-icon :name="item.icon" class="w-2 h-2 mr-1" :innerClass="{'fill-red-500':true,'dark:fill-zinc-300':true}" />
                    <span class="text-base text-red-500 mx-1 dark:text-zinc-300">{{item.text}}</span>
                </li>
            </ul>

        </template>
    </popover>
</template>

<script setup>
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from "../../../../constants";
import { ref,computed} from "vue";
import { useStore } from "vuex";

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
// theme icon
const themeName = computed(()=>{
    const currentTheme = themeList.find((theme)=>{
        return theme.id===store.getters.theme
    })
    console.log(currentTheme)
    return currentTheme.icon;
});

const store=useStore()  
// change theme
const onChange = (item)=>{
    const theme = item.id;
    themeName.value = item.icon;
    store.commit('theme/setTheme',theme);
}





</script>

<style lang="scss" scoped>

</style>