import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { contactRoute } from "../../../strings/routes/routes-strings";

const useErrorEmailingOrderToAppOwnerSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const errorEmailingOrderToAppOwnerSwal = () => {
    fireSwal(
      "error",
      "well this is embarassing..The email failed to send. Please contact us immediately so that we can process your order. We have saved your cart items for the moment should you need their details. We sincerely apologise for the inconvenience.",
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        hamburgerHandlerNavigate(contactRoute);
      }
    });
  };

  return { errorEmailingOrderToAppOwnerSwal };
};

export default useErrorEmailingOrderToAppOwnerSwal;
