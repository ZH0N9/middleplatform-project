import service from '../utils/request';

// fetch category data
export const fetchCategory = (params={})=>{
    return service({
        url:'/category',
        params
    })
}

// fetch pexel data
export const fetchPexel = (params={})=>{
    return service({
        url:'pexels/list',
        params
    })
}