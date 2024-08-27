import { useEffect } from "react";
import { useDispatch } from "react-redux";

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

const useAddOrderToDatabaseResultSwalUseEffect = () => {
  const { addOrderResult, addOrderError } = useGetDatabaseManagementSelectors();
  const { name, email } = useGetCurrentUserSelectors();
  const { formattedStringOfOrderForEmail } =
    useGetDatabaseManagementSelectors();

  const { emailSentToAppOwnerAfterUploadOrderErrorSwal } =
    useEmailSentToAppOwnerAfterUploadOrderErrorSwal();
  const { errorEmailingOrderToAppOwnerSwal } =
    useErrorEmailingOrderToAppOwnerSwal();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

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
          dispatch(
            sendEmailOrderNotAddedToDatabaseAsync({
              name,
              email,
              formattedStringOfOrderForEmail,
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
    fireSwal,
    hamburgerHandlerNavigate,
    confirmSwal,
    dispatch,
    name,
    email,
    formattedStringOfOrderForEmail,
    errorEmailingOrderToAppOwnerSwal,
    emailSentToAppOwnerAfterUploadOrderErrorSwal,
  ]);
};

export default useAddOrderToDatabaseResultSwalUseEffect;
