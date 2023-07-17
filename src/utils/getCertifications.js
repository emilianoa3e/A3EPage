import instance from "./axios";
import axios from "axios";

export const getCertifications = async () => {
  try {
    const response = await axios.get(
      instance.defaults.baseURL + "/certification/getAll-certifications"
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
