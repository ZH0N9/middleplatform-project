import request from '../utils/request';

export const fetchCategory = (params={})=>{
    return request({
        url:'/catogory',
        params
    })
}