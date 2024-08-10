import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "../styles/confirm.css";

const useFireSwal = () => {
  const swal = withReactContent(Swal);

  const fireSwal = async (
    icon,
    title,
    text,
    timer,
    confirmButtonText,
    showCancelButton,
    cancelButtonText,
    allowOutsideClick
  ) => {
    return await swal
      .fire({
        icon,
        title,
        text,
        timer,
        showConfirmButton: !timer ? true : false,
        confirmButtonText: confirmButtonText ? confirmButtonText : "ok",
        showCancelButton,
        cancelButtonText: cancelButtonText ? cancelButtonText : "cancel",
        allowOutsideClick,
        confirmButtonColor: "#3085d6",
        background: "black",
        backdrop: `rgba(37,94,168, 0.8)`,
        customClass: "confirm",
        reverseButtons: true,
      })
      .then((result) => {
        return result.isConfirmed;
      });
  };

  return { fireSwal };
};
export default useFireSwal;
