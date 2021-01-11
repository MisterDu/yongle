//封装axios
import axios from 'axios'


//响应拦截器
axios.interceptors.response.use((ret) => {
    return ret.data || ret
})




export default axios