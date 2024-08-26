import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import {
  uploadOrderDeleteCartItemsRoute,
  uploadOrderSendEmailConfirmationRoute,
} from "../../../strings/routes/routes-strings";
import { errorUploadingOrderToDbMessage } from "../../../strings/errors/errors-strings";

const useAddOrderToDatabaseResultSwalUseEffect = () => {
  const { addOrderResult, addOrderError } = useGetDatabaseManagementSelectors();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (!addOrderResult && !addOrderError) return;

    if (addOrderResult === "fulfilled") {
      hamburgerHandlerNavigate(uploadOrderSendEmailConfirmationRoute);
    } else if (addOrderResult === "rejected") {
      fireSwal(
        "error",
        errorUploadingOrderToDbMessage,
        "",
        0,
        "send email",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          // email app owner here. if successfull clear cartItems after sending.
          // remove hamburger here when done.
          console.log("emailing app owner");
          hamburgerHandlerNavigate(uploadOrderDeleteCartItemsRoute);
        }
      });
    }
  }, [
    addOrderResult,
    addOrderError,
    fireSwal,
    hamburgerHandlerNavigate,
    confirmSwal,
  ]);
};

export default useAddOrderToDatabaseResultSwalUseEffect;
