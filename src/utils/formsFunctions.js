import axios from "axios";
import instance from "./axios";
import { showLoadingAlert, showSimpleAlert } from "../plugins/alert";

export const saveSale = async (values, tokenRecaptcha) => {
  showLoadingAlert("Cargando...", "Espere un momento por favor.");

  try {
    const response = await axios.post(
      instance.defaults.baseURL + "/sale/create-sale",
      {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        typeService: values.typeService,
        enterprise: values.enterprise,
        address: values.address,
        info: values.info,
        tokenRecaptcha,
      }
    );

    if (response.data.msg === "Sale saved") {
      showSimpleAlert(
        "¡Gracias por enviar tu solicitud!",
        "Pronto nos pondremos en contacto contigo.",
        "success"
      );
    }
  } catch (error) {
    console.log("error", error);

    if (error.response.data.msg === "Your request is already registered") {
      showSimpleAlert(
        "Tu solicitud ya está registrada",
        "El correo electrónico y/o empresa ya fueron registrados. Pronto nos pondremos en contacto contigo, gracias por tu interés.",
        "info"
      );
    } else {
      showSimpleAlert(
        "Error del servidor",
        "Por favor, inténtelo de nuevo más tarde.",
        "error"
      );
    }
  }
};

export const saveVacancie = async (values, uploadedFile, tokenRecaptcha) => {
  const formData = new FormData();
  formData.append("fullName", values.fullName);
  formData.append("email", values.email);
  formData.append("phone", values.phone);
  formData.append("age", values.age);
  formData.append("residence", values.residence);
  formData.append("education", values.education);
  formData.append("position", values.position);
  formData.append("source", values.source);
  formData.append("curriculum", uploadedFile);
  formData.append("tokenRecaptcha", tokenRecaptcha);

  showLoadingAlert("Cargando...", "Espere un momento por favor.");

  try {
    const response = await axios.post(
      instance.defaults.baseURL + "/vacancie/create-vacancie",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data.msg === "Vacancie saved") {
      showSimpleAlert(
        "¡Gracias por enviar tu solicitud!",
        "Pronto nos pondremos en contacto contigo.",
        "success"
      );
    }
  } catch (error) {
    console.log("error", error);

    if (error.response.data.msg === "Your request is already registered") {
      showSimpleAlert(
        "Tu solicitud ya está registrada",
        "Pronto nos pondremos en contacto contigo, gracias por tu interés.",
        "info"
      );
    } else {
      showSimpleAlert(
        "Error del servidor",
        "Por favor, inténtelo de nuevo más tarde.",
        "error"
      );
    }
  }
};

export const saveIntern = async (values, tokenRecaptcha) => {
  showLoadingAlert("Cargando...", "Espere un momento por favor.");

  try {
    const response = await axios.post(
      instance.defaults.baseURL + "/intern/create-intern",
      {
        fullName: values.fullName,
        phone: values.phone,
        email: values.email,
        age: values.age,
        institution: values.institution,
        typePractice: values.typePractice,
        degree: values.degree,
        period: values.period,
        info: values.info,
        tokenRecaptcha,
      }
    );

    if (response.data.msg === "Intern saved") {
      showSimpleAlert(
        "¡Gracias por enviar tu solicitud!",
        "Pronto nos pondremos en contacto contigo.",
        "success"
      );
    }
  } catch (error) {
    console.log("error", error);

    if (error.response.data.msg === "Your request is already registered") {
      showSimpleAlert(
        "Tu solicitud ya está registrada",
        "Pronto nos pondremos en contacto contigo, gracias por tu interés.",
        "info"
      );
    } else {
      showSimpleAlert(
        "Error del servidor",
        "Por favor, inténtelo de nuevo más tarde.",
        "error"
      );
    }
  }
};
