import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useFireSwal from "../../../hooks/use-fire-swal";

import { menuRoute } from "../../../strings/routes/routes-strings";

const useDeleteCartItemsFromDbResultUseEffect = () => {
  const { deleteUserCartItemsResult, deleteUserCartItemsError } =
    useGetDatabaseManagementSelectors();

  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (!deleteUserCartItemsResult && !deleteUserCartItemsError) return;

    if (deleteUserCartItemsResult === "fulfilled") {
      hamburgerHandlerNavigate(menuRoute);
    } else if (deleteUserCartItemsResult === "rejected") {
      fireSwal(
        "error",
        "Please note, we had an error when trying to clear your cart items. This does not affect your order that you have just placed, but please go to your account page and tap the clear cart items button to clear them manually. We apologise for the inconvenience!",
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(menuRoute);
        }
      });
    }
  }, [
    deleteUserCartItemsResult,
    deleteUserCartItemsError,
    hamburgerHandlerNavigate,
    fireSwal,
  ]);
};

export default useDeleteCartItemsFromDbResultUseEffect;
