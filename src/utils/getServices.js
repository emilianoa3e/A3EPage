import instance from "./axios";
import axios from "axios";

export const getServices = async () => {
  try {
    const response = await axios.get(
      instance.defaults.baseURL + "/service/getAll-services"
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getService = async (id) => {
  try {
    const response = await axios.get(
      instance.defaults.baseURL + `/service/getById-service/${id}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
