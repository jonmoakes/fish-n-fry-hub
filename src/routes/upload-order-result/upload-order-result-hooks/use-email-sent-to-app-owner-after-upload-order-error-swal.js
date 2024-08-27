import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { uploadOrderDeleteCartItemsRoute } from "../../../strings/routes/routes-strings";

const useEmailSentToAppOwnerAfterUploadOrderErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const emailSentToAppOwnerAfterUploadOrderErrorSwal = () => {
    fireSwal(
      "success",
      "email sent! we will contact you asap to confirm your order.",
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        hamburgerHandlerNavigate(uploadOrderDeleteCartItemsRoute);
      }
    });
  };

  return { emailSentToAppOwnerAfterUploadOrderErrorSwal };
};

export default useEmailSentToAppOwnerAfterUploadOrderErrorSwal;
