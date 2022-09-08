import { THEME_LIGHT } from "../../constants";

export default {
    namespaced:true,
    state:()=>{
        return {
            theme:THEME_LIGHT
        }
    },
    mutations:{
        setTheme(state,param){
            state.theme = param;
        }
    }
}