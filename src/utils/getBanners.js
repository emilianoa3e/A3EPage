import instance from "./axios"
import axios from "axios";
export const getBanners = async () =>{
    try{
        const response = await axios.get(instance.defaults.baseURL+'/banner/getAll-banner');
        return response.data;
        
    }catch(error){
        console.log(error)
    }
}