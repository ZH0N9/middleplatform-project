import { ALL_CATEGORY_ITEM } from "../../constants";

 export default{
    namespaced:true,
    state:{
        currentCategory:ALL_CATEGORY_ITEM
    },
    mutations:{
        setCurrentCategory(state,param){
            state.currentCategory = param;
        }

    }
 }