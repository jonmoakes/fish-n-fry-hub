import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useHamburgerHandlerNavigate from "./use-hamburger-handler-navigate";

import "../styles/confirm.css";
import {
  customBlack,
  customNavy,
  customBlue,
  customTomato,
} from "../styles/colors";

const useConfirmSwal = () => {
  const swal = withReactContent(Swal);
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const confirmSwal = (
    title,
    textHtml,
    buttonText,
    confirmResult,
    cancelResult
  ) => {
    swal
      .fire({
        title,
        html: textHtml,
        background: customBlack,
        backdrop: customNavy,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: customBlue,
        cancelButtonColor: customTomato,
        confirmButtonText: buttonText,
        customClass: "confirm",
        allowOutsideClick: false,
        allowEscapeKey: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          confirmResult();
        } else if (result.isDismissed && cancelResult) {
          cancelResult();
        }
      });
  };

  const confirmForwardToNewRoute = (title, text, buttonText, route) => {
    swal
      .fire({
        title,
        text,
        background: customBlack,
        backdrop: customNavy,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: customBlue,
        cancelButtonColor: customTomato,
        confirmButtonText: buttonText,
        customClass: "confirm",
        allowOutsideClick: false,
        allowEscapeKey: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          hamburgerHandlerNavigate(route);
        } else {
          return;
        }
      });
  };

  return {
    confirmSwal,
    confirmForwardToNewRoute,
  };
};
export default useConfirmSwal;
