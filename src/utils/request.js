import axios from "axios";

const service = axios.create({
    baseURL:'https://api.imooc-front.lgdsunday.club/api',
    timeout:5000
})

service.interceptors.request.use(
    config =>{
        config.headers.icode = '1F6EAD4AB4DA60E9'
        // 必须返回 config
        return config 
    }
)

export default service
