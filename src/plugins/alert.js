import Swal from "sweetalert2";
import A3ELogo from "../assets/img/logos/A3E_svg.svg"

export const showConfirmDialog = (
  title,
  text,
  confirmButtonText,
  cancelButtonText,
  confirmCallback
) => {
  Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#002e60",
    cancelButtonColor: "rgb(221, 51, 51)",
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
  }).then((result) => {
    if (result.isConfirmed) {
      confirmCallback();
    }
  });
};

export const showAcceptDialog = (
  title,
  link,
  placeholder,
  confirmButtonText,
  notConfirmCheckboxText,
  confirmCallback
) => {
  Swal.fire({
    title: `<a href="${link}" target="_blank" style="color: #00743B;">${title}</a>`,
    input: "checkbox",
    inputValue: 0,
    inputPlaceholder: placeholder,
    confirmButtonColor: "#00743B",
    confirmButtonText: confirmButtonText,
    inputValidator: (result) => {
      return !result && notConfirmCheckboxText;
    },
    backdrop: `rgba(0, 180, 91, 0.2) url(${A3ELogo}) no-repeat right`
  }).then((result) => {
    if (result.isConfirmed) {
      confirmCallback();
    }
  });
};

export const showLoadingAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });
};

export const closeLoadingAlert = () => {
  Swal.close();
};

export const showSimpleAlert = (title, text, icon) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: "Ok",
  });
};

export const showTimerAlert = (title, text, icon, timer, timerProgressBar) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: "Ok",
    timer: timer,
    timerProgressBar: timerProgressBar,
  });
};
