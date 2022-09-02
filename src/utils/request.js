import axios from "axios";

const baseAPI = import.meta.env.VITE_BASE_API;
console.log(baseAPI);
const service = axios.create({
    baseURL:baseAPI,
    timeout:5000
})

service.interceptors.request.use(
    config =>{
        config.headers.icode = '1F6EAD4AB4DA60E9'
        // 必须返回 config
        return config 
    }
)
service.interceptors.response.use(
    response=>{
        const {code,success,data} = response.data;
        if(code===200&&success){
            return data
        }else{
            throw Promise.reject(new Error(code))
        }
    }
)
export default service
