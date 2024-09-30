import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import { dbManageAddOrderToDatabaseAsync } from "../../../store/database-management/database-management.thunks";

import useUpdateDocumentFunctions from "../../../hooks/database-management/use-update-document-functions";
import useUpdateDocumentSwals from "../../../hooks/database-management/use-update-document-swals";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";

import { validateEmail } from "../../../functions/validate-email";
import { imSureMessage } from "../../../strings/confirms/confirms-strings";

const useDbManageConfirmAddOrder = () => {
  const { customerName, customerEmail, customerId, orderDetails } =
    useGetDatabaseManagementSelectors();
  const {
    invalidDocumentIdLength,
    stringHasUpperCaseLetters,
    valueStartsOrEndsWithSpace,
  } = useUpdateDocumentFunctions();
  const {
    fireDbManageAddOrderCantHaveUppercaseCharactersSwal,
    fireDocumentIdLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
    fireEmptyValuesSwal,
  } = useUpdateDocumentSwals();

  const { confirmSwal } = useConfirmSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();
  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      dbManageAddOrderToDatabaseAsync({
        orderDetails,
        customerName,
        customerEmail,
        customerId,
      })
    );
  };

  const dbManageConfirmAddOrder = () => {
    if (!customerName || !customerEmail || !customerId || !orderDetails) {
      fireEmptyValuesSwal();
    } else if (!validateEmail(customerEmail)) {
      showInvalidEmailMessageSwal();
    } else if (
      stringHasUpperCaseLetters(customerName) ||
      stringHasUpperCaseLetters(customerId) ||
      stringHasUpperCaseLetters(customerEmail)
    ) {
      fireDbManageAddOrderCantHaveUppercaseCharactersSwal();
    } else if (invalidDocumentIdLength(customerId)) {
      fireDocumentIdLengthErrorSwal();
    } else if (valueStartsOrEndsWithSpace(customerId)) {
      fireWhiteSpaceErrorSwal();
    } else {
      confirmSwal(
        "are you sure you want to add this order?",
        "",
        imSureMessage,
        "",
        () => confirmResult(),
        null
      );
    }
  };

  return { dbManageConfirmAddOrder };
};

export default useDbManageConfirmAddOrder;
