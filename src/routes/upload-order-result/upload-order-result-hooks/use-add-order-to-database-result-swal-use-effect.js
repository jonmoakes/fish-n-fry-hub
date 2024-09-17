import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import useGetCartItemsSelectors from "../../../hooks/selectors/use-get-cart-items-selectors";
import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { sendEmailOrderNotAddedToDatabaseAsync } from "../../../store/send-email/send-email.thunks";

import useErrorEmailingOrderToAppOwnerSwal from "./use-error-emailing-order-to-app-owner-swal";
import useEmailSentToAppOwnerAfterUploadOrderErrorSwal from "./use-email-sent-to-app-owner-after-upload-order-error-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { uploadOrderSendEmailConfirmationRoute } from "../../../strings/routes/routes-strings";
import { errorUploadingOrderToDbMessage } from "../../../strings/errors/errors-strings";
import useGetOrderToRepeatSelectors from "../../../hooks/selectors/use-get-order-to-repeat-selectors";
import { sendEmailText } from "../../../strings/info/info-strings";

const useAddOrderToDatabaseResultSwalUseEffect = () => {
  const { addOrderResult, addOrderError } = useGetDatabaseManagementSelectors();
  const {
    orderToRepeatResult,
    orderToRepeatError,
    orderToRepeatDetails,
    repeatOrderForDb,
  } = useGetOrderToRepeatSelectors();
  const { name, email, id } = useGetCurrentUserSelectors();
  const { cartItems } = useGetCartItemsSelectors();

  const { emailSentToAppOwnerAfterUploadOrderErrorSwal } =
    useEmailSentToAppOwnerAfterUploadOrderErrorSwal();
  const { errorEmailingOrderToAppOwnerSwal } =
    useErrorEmailingOrderToAppOwnerSwal();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const swalShown = useRef(false);

  useEffect(() => {
    if (
      (!addOrderResult &&
        !addOrderError &&
        !orderToRepeatResult &&
        !orderToRepeatError) ||
      swalShown.current
    )
      return;

    if (addOrderResult === "fulfilled" || orderToRepeatResult === "fulfilled") {
      hamburgerHandlerNavigate(uploadOrderSendEmailConfirmationRoute);
    } else if (
      addOrderResult === "rejected" ||
      orderToRepeatResult === "rejected"
    ) {
      swalShown.current = true;
      fireSwal(
        "error",
        errorUploadingOrderToDbMessage,
        "",
        0,
        sendEmailText,
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          const customerId = id;
          const orderDetails = orderToRepeatDetails
            ? repeatOrderForDb
            : JSON.stringify(cartItems);
          dispatch(
            sendEmailOrderNotAddedToDatabaseAsync({
              name,
              email,
              customerId,
              orderDetails,
            })
          ).then((resultAction) => {
            if (
              sendEmailOrderNotAddedToDatabaseAsync.fulfilled.match(
                resultAction
              )
            ) {
              emailSentToAppOwnerAfterUploadOrderErrorSwal();
            } else if (
              sendEmailOrderNotAddedToDatabaseAsync.rejected.match(resultAction)
            ) {
              errorEmailingOrderToAppOwnerSwal();
            }
          });
        }
      });
    }
  }, [
    addOrderResult,
    addOrderError,
    orderToRepeatResult,
    orderToRepeatError,
    fireSwal,
    hamburgerHandlerNavigate,
    confirmSwal,
    dispatch,
    name,
    email,
    errorEmailingOrderToAppOwnerSwal,
    emailSentToAppOwnerAfterUploadOrderErrorSwal,
    cartItems,
    orderToRepeatDetails,
    repeatOrderForDb,
    id,
  ]);
};

export default useAddOrderToDatabaseResultSwalUseEffect;
