import axios from "axios";
import instance from "./axios";

export const getNews = async ()=>{
    try{
        const response = await axios.get(instance.defaults.baseURL+'/new/getAll-news')
        return response.data
    }catch(error){
        console.log(error);
    }
}