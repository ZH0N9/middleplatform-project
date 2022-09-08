import store from "../store";
import { watch } from "vue";
import { THEME_LIGHT,THEME_DARK,THEME_SYSTEM } from "../constants";

let matchMedia;
const changeWithSystem = ()=>{
    // only once
    if(matchMedia){return};
    matchMedia = window.matchMedia('(prefers-color-scheme:dark)');
    matchMedia.onchange=()=>{
        changeTheme(THEME_SYSTEM);
    }
}

const changeTheme = (theme)=>{
    let themeClass="";
    if(theme===THEME_LIGHT){
        themeClass='light'
    }else if(theme===THEME_DARK){
        themeClass='dark'
    }else if(theme===THEME_SYSTEM){
        changeWithSystem();
        themeClass=matchMedia.matches?'dark':'light';
    }
    const html =document.querySelector('html');
    html.className=themeClass;

}
export const useTheme=()=>{
    watch(
        ()=>{return store.getters.theme}, 
        (newVal)=>{
            changeTheme(newVal);
        },
        {
            immediate:true
        }
    )

}