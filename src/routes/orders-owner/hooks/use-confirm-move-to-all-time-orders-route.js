import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import {
  confirmGoToAllTimeOrdersRouteMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import { ordersOwnerAllTimeOrdersRoute } from "../../../strings/routes/routes-strings";

const useConfirmMoveToAllTimeOrdersRoute = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { confirmSwal } = useConfirmSwal();

  const confirmMoveToAllTimeOrdersRoute = () => {
    const confirmResult = () => {
      hamburgerHandlerNavigate(ordersOwnerAllTimeOrdersRoute);
    };

    confirmSwal(
      confirmGoToAllTimeOrdersRouteMessage,
      "",
      imSureMessage,
      "",
      () => confirmResult(),
      null
    );
  };

  return { confirmMoveToAllTimeOrdersRoute };
};

export default useConfirmMoveToAllTimeOrdersRoute;
