import instance from "./axios"
import axios from "axios";
export const getBanners = async () =>{
    try{
        const response = await axios.get(instance.defaults.baseURL+'/banner/getAll-banners');
        return response.data;
        
    }catch(error){
        console.log(error.response.data)
        return error.response.data;

    }
}