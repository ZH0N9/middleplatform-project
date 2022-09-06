import service from '../utils/request';

export const fetchCategory = (params={})=>{
    return service({
        url:'/category',
        params
    })
}