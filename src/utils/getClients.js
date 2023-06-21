import axios from "axios";
import instance from "./axios";

export const getClientes = async ()=> {
    try{
        const response = await axios.get(
            instance.defaults.baseURL + '/client/getAll-clients'            
        )
        return response.data
    }catch(error){
        console.log(error);
    }
}