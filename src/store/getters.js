export default{
    // quick access to catogory data from store
    category:(state)=>{return state.category.categories},
    theme:(state)=>{return state.theme.theme},
    currentCategory:(state)=>{return state.currCategory.currentCategory},
    currentCategoryIndex:(state,getters)=>{
        return getters.category.findIndex((item)=>{
            return item.id===getters.currentCategory.id;
        })
    }
}