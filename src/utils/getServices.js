import instance from "./axios";
import axios from "axios";

export const getServices = async ()=>{
    try{
        const response = await axios.get(instance.defaults.baseURL+'/service/getAll-services')
        return response.data;
    }catch(error){
        console.log(error);
    }
}