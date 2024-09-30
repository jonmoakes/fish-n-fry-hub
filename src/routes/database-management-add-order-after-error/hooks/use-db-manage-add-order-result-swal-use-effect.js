import { useEffect, useRef } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";

import useFireSwal from "../../../hooks/use-fire-swal";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { ordersOwnerRoute } from "../../../strings/routes/routes-strings";

const useDbManageAddOrderResultSwalUseEffect = () => {
  const { addOrderResult, addOrderError } = useGetDatabaseManagementSelectors();

  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const swalShown = useRef(false);

  useEffect(() => {
    if ((!addOrderResult && !addOrderError) || swalShown.current) return;

    if (addOrderResult === "fulfilled") {
      fireSwal("success", "order uploaded!", "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(ordersOwnerRoute);
          }
        }
      );
    } else if (addOrderResult === "rejected") {
      swalShown.current = true;
      fireSwal(
        "error",
        "there was an error uploading the order",
        `the error was ${addOrderError}`,
        0,
        "",
        false,
        "",
        false
      );
    }
  }, [addOrderError, addOrderResult, fireSwal, hamburgerHandlerNavigate]);
};

export default useDbManageAddOrderResultSwalUseEffect;
