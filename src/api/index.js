import service from '../utils/request';

// fetch category data
export const fetchCategory = (params={})=>{
    return service({
        url:'/category',
        method:'get',
        params
    })
}

// fetch pexel data
export const fetchPexel = (params={})=>{
    return service({
        url:'pexels/list',
        method:'get',
        params
    })
}

//fetch search hint
export const fetchSearchHint = (params={})=>{
    return service({
        url:'/pexels/hint',
        method:'get',
        params
    })
}