import { fetchCategory } from "../../api/category";
import { ALL_CATEGORY_ITEM,INITIAL_CATEGORY_DATA } from "../../constants";

export default {
    // independent space
    namespaced:true,
    state:()=>{
        return {
            categories:INITIAL_CATEGORY_DATA
        }
    },
    mutations:{
        setCategoryData(state,param){
            state.categories=[ALL_CATEGORY_ITEM,...param];
            console.log(state.categories)
        }
    },
    actions:{
        async getCategoryData({state,commit}){
            const res = await fetchCategory();
            if(res){
                const {categorys}=res;
                commit('setCategoryData',categorys);
            }
        }

    }

}