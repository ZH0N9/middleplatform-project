import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"
import getters from './getters'
import category from "./modules/category.js";
import theme from './modules/theme.js'

const store= createStore({
    getters,
    modules:{
        category,
        theme
    },
    plugins:[
        createPersistedState({
            // local storagen key
            key:'platformData',
            // stored module
            paths:['category','theme']
        })
    ]
});
export default store;