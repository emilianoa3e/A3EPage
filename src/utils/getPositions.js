import axios from "axios";
import instance from "./axios";

export const getAllPositions = async () => {
  try {
    const response = await axios.get(
      instance.defaults.baseURL + "/position/getAll-positions"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
