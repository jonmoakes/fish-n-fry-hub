import useFireSwal from "../use-fire-swal";
import {
  cantHaveUppercaseCharactersErrorMessage,
  cantIncludeCommaMessage,
  documentLengthErrorMessage,
  missingFieldsMessage,
  phoneNumberLengthErrorMessage,
  whiteSpaceErrorMessage,
} from "../../strings/errors/errors-strings";

const useUpdateDocumentSwals = () => {
  const { fireSwal } = useFireSwal();

  const fireEmptyValuesSwal = () => {
    fireSwal("error", missingFieldsMessage, "", 0, true, false);
  };

  const fireCantHaveUppercaseCharactersSwal = () => {
    fireSwal(
      "error",
      cantHaveUppercaseCharactersErrorMessage,
      "",
      0,
      true,
      false
    );
  };

  const fireDocumentIdLengthErrorSwal = () => {
    fireSwal("error", documentLengthErrorMessage, "", 0, true, false);
  };

  const fireWhiteSpaceErrorSwal = () => {
    fireSwal("error", whiteSpaceErrorMessage, "", 0, true, false);
  };

  const fireInvalidPhoneNumberSwal = () => {
    fireSwal("error", phoneNumberLengthErrorMessage, "", 0, true, false);
  };

  const nameCantIncludeCommaSwal = () => {
    fireSwal("error", cantIncludeCommaMessage, "", 0, true, false);
  };

  return {
    fireEmptyValuesSwal,
    fireCantHaveUppercaseCharactersSwal,
    fireDocumentIdLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
    fireInvalidPhoneNumberSwal,
    nameCantIncludeCommaSwal,
  };
};

export default useUpdateDocumentSwals;
