import { useDispatch } from "react-redux";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import {
  deleteDocumentAsync,
  updateProductPricesAsync,
} from "../../../store/database-management/database-management.thunks";

import {
  confirmCancelEditingMessage,
  confirmRemoveProductMessage,
  confirmUpdateProductPriceMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import {
  loseUnsavedChangesMessage,
  updateAtrributeMessage,
} from "../../../strings/info/info-strings";
import { resetProductToEdit } from "../../../store/database-management/database-management.slice";

const useConfirmUpdatePropertySwals = () => {
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const confirmUpdateProperty = (
    name,
    attributeDescription,
    newValue,
    attributeKey,
    $collectionId,
    $id
  ) => {
    confirmSwal(
      confirmUpdateProductPriceMessage(attributeDescription, name, newValue),
      "",
      updateAtrributeMessage,
      "",
      () =>
        dispatch(
          updateProductPricesAsync({
            attributeKey,
            newValue,
            $collectionId,
            $id,
          })
        ),
      null
    );
  };

  const confirmDeleteProduct = (name, $collectionId, $id) => {
    confirmSwal(
      confirmRemoveProductMessage(name),
      "",
      imSureMessage,
      "",
      () =>
        dispatch(
          deleteDocumentAsync({
            collectionId: $collectionId,
            documentId: $id,
          })
        ),
      null
    );
  };

  const confirmCancelEditing = () => {
    confirmSwal(
      confirmCancelEditingMessage,
      loseUnsavedChangesMessage,
      "yes, cancel editing",
      "stay here",
      () => dispatch(resetProductToEdit()),
      null
    );
  };

  return { confirmUpdateProperty, confirmDeleteProduct, confirmCancelEditing };
};

export default useConfirmUpdatePropertySwals;
