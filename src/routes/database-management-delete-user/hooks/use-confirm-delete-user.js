import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import { deleteDocumentAsync } from "../../../store/database-management/database-management.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useUpdateDocumentFunctions from "../../../hooks/database-management/use-update-document-functions";
import useUpdateDocumentSwals from "../../../hooks/database-management/use-update-document-swals";

import {
  confirmDeleteUserDocument,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import { userCollectionId } from "../../../constants/constants";

const useConfirmDeleteUser = () => {
  const { userToDeleteDocumentId } = useGetDatabaseManagementSelectors();
  const {
    invalidDocumentIdLength,
    stringHasUpperCaseLetters,
    valueStartsOrEndsWithSpace,
  } = useUpdateDocumentFunctions();
  const {
    fireCantHaveUppercaseCharactersSwal,
    fireDocumentIdLengthErrorSwal,
    fireWhiteSpaceErrorSwal,
  } = useUpdateDocumentSwals();

  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      deleteDocumentAsync({
        collectionId: userCollectionId,
        documentId: userToDeleteDocumentId,
      })
    );
  };

  const confirmDeleteUser = () => {
    if (invalidDocumentIdLength(userToDeleteDocumentId)) {
      fireDocumentIdLengthErrorSwal();
    } else if (stringHasUpperCaseLetters(userToDeleteDocumentId)) {
      fireCantHaveUppercaseCharactersSwal();
    } else if (valueStartsOrEndsWithSpace(userToDeleteDocumentId)) {
      fireWhiteSpaceErrorSwal();
    } else {
      confirmSwal(
        confirmDeleteUserDocument,
        "",
        imSureMessage,
        "",
        () => confirmResult(),
        null
      );
    }
  };

  return { confirmDeleteUser };
};

export default useConfirmDeleteUser;
