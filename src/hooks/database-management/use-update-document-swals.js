import useFireSwal from "../use-fire-swal";
import {
  cantHaveUppercaseCharactersErrorMessage,
  cantIncludeCommaMessage,
  dbManageAddOrdercantHaveUppercaseCharactersErrorMessage,
  documentLengthErrorMessage,
  missingFieldsMessage,
  phoneNumberLengthErrorMessage,
  whiteSpaceErrorMessage,
} from "../../strings/errors/errors-strings";

const useUpdateDocumentSwals = () => {
  const { fireSwal } = useFireSwal();

  const fireEmptyValuesSwal = () => {
    fireSwal("error", missingFieldsMessage, "", 0, "", false, "", false);
  };

  const fireCantHaveUppercaseCharactersSwal = () => {
    fireSwal(
      "error",
      cantHaveUppercaseCharactersErrorMessage,
      "",
      0,
      "",
      false,
      "",
      false
    );
  };

  const fireDbManageAddOrderCantHaveUppercaseCharactersSwal = () => {
    fireSwal(
      "error",
      dbManageAddOrdercantHaveUppercaseCharactersErrorMessage,
      "",
      0,
      "",
      false,
      "",
      false
    );
  };

  const fireDocumentIdLengthErrorSwal = () => {
    fireSwal("error", documentLengthErrorMessage, "", 0, "", false, "", false);
  };

  const fireWhiteSpaceErrorSwal = () => {
    fireSwal("error", whiteSpaceErrorMessage, "", 0, "", false, "", false);
  };

  const fireInvalidPhoneNumberSwal = () => {
    fireSwal(
      "error",
      phoneNumberLengthErrorMessage,
      "",
      0,
      "",
      false,
      "",
      false
    );
  };

  const nameCantIncludeCommaSwal = () => {
    fireSwal("error", cantIncludeCommaMessage, "", 0, "", false, "", false);
  };

  return {
    fireEmptyValuesSwal,
    fireCantHaveUppercaseCharactersSwal,
    fireDocumentIdLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
    fireInvalidPhoneNumberSwal,
    nameCantIncludeCommaSwal,
    fireDbManageAddOrderCantHaveUppercaseCharactersSwal,
  };
};

export default useUpdateDocumentSwals;
