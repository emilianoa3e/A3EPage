import axios from "axios";
import instance from "./axios";
import { showLoadingAlert, showSimpleAlert } from "../plugins/alert";

export const saveBoletin = async (values, tokenRecaptcha) => {
  console.log(values, tokenRecaptcha);
  try {
    const response = await axios.post(
      instance.defaults.baseURL + "/subscription/subscribe",
      {
        name: values.name,
        lastname: values.lastname,
        surname: values.surname,
        email: values.companyEmail,
        position: values.position,
        company: values.company,
      }
    );
    console.log(response.data);
    if (response.data.msg === "Request success") {
      showSimpleAlert(
        "¡Gracias por enviar tu solicitud!",
        "Revisa tu correo electrónico para proceder con la confirmación",
        "success"
      );
    }
  } catch (error) {
    console.log(error);
    if (error.response.data.msg === "Request already exist") {
      showSimpleAlert(
        "Tu solicitud ya está registrada",
        "Pronto nos pondremos en contacto contigo, gracias por tu interés.",
        "info"
      );
    } else if (error.response.data.msg === "Subscription already exist") {
      showSimpleAlert("Ya estás registrado en nuestro boletín", "info");
    } else {
      showSimpleAlert(
        "Error del servidor",
        "Por favor, inténtelo de nuevo más tarde.",
        "error"
      );
    }
  }
};

export const validateEmail = async (token) => {
  try {
    const response = await axios.get(
      instance.defaults.baseURL + `/subscription/validate-email/${token}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
