import axios from "axios";
import instance from "./axios";

export const getAllContacts = async () => {
  try {
    const response = await axios.get(
      instance.defaults.baseURL + "/contact/getAll-contacts"
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("getAllContacts error", error);
  }
};
