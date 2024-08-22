import { useEffect } from "react";
import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { menuRoute } from "../../../strings/routes/routes-strings";

const useDeleteCartItemsFromDbResultUseEffect = () => {
  const { deleteUserCartItemsResult, deleteUserCartItemsError } =
    useGetDatabaseManagementSelectors();

  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (!deleteUserCartItemsResult && !deleteUserCartItemsError) return;

    const confirmResult = () => {
      //send email here. remove hamburger handler when done
      console.log("send email!");
      hamburgerHandlerNavigate(menuRoute);
    };

    const cancelResult = () => {
      hamburgerHandlerNavigate(menuRoute);
    };

    if (deleteUserCartItemsResult === "fulfilled") {
      confirmSwal(
        "order placed! do you want an email confirmation sent?",
        "",
        "yes",
        "no",
        () => confirmResult(),
        () => cancelResult()
      );
    } else if (deleteUserCartItemsResult === "rejected") {
      confirmSwal(
        "order placed! do you want an email confirmation sent? Please note, we had an error when trying to clear your cart items. This does not affect your order that you have just placed, but  please go to your account page and tap the clear cart items button to clear them manually. We apologise for the inconvenience!",
        "",
        "yes",
        "no",
        () => confirmResult(),
        () => cancelResult()
      );
    }
  }, [
    deleteUserCartItemsResult,
    deleteUserCartItemsError,
    hamburgerHandlerNavigate,
    confirmSwal,
  ]);
};

export default useDeleteCartItemsFromDbResultUseEffect;
