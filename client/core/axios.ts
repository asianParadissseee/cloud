import axios, {AxiosRequestConfig, InternalAxiosRequestConfig} from "axios";
import {parseCookies} from "nookies";

axios.defaults.baseURL = ""

axios.interceptors.request.use((config)=>{
    if(typeof  window !== "undefined") {
        const {_token}  = parseCookies()
        config.headers.Authorization = `Bearer ${_token}`
    }
    return config
})
