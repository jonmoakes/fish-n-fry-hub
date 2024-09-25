import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useFireSwal from "../../../hooks/use-fire-swal";

import { ordersCustomerRoute } from "../../../strings/routes/routes-strings";
import { errorDeletingCartItemsFromDbMessage } from "../../../strings/errors/errors-strings";

const useDeleteCartItemsFromDbResultUseEffect = () => {
  const { deleteUserCartItemsResult, deleteUserCartItemsError } =
    useGetDatabaseManagementSelectors();

  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (!deleteUserCartItemsResult && !deleteUserCartItemsError) return;

    if (deleteUserCartItemsResult === "fulfilled") {
      hamburgerHandlerNavigate(ordersCustomerRoute);
    } else if (deleteUserCartItemsResult === "rejected") {
      fireSwal(
        "error",
        errorDeletingCartItemsFromDbMessage,
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(ordersCustomerRoute);
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
