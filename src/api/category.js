import request from '../utils/request';

export const fetchCategory = (params={})=>{
    return request({
        url:'/category',
        params
    })
}