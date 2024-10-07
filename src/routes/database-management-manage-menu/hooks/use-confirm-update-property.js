import { useDispatch } from "react-redux";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import {
  deleteDocumentAsync,
  updateProductAttributeAsync,
} from "../../../store/database-management/database-management.thunks";

import { imSureMessage } from "../../../strings/confirms/confirms-strings";

const useConfirmUpdateProperty = () => {
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const confirmUpdateProperty = (attributeKey, value, $collectionId, $id) => {
    confirmSwal(
      `Update this value?`,
      "",
      "yes",
      "",
      () =>
        dispatch(
          updateProductAttributeAsync({
            attributeKey,
            value,
            $collectionId,
            $id,
          })
        ),
      null
    );
  };

  const confirmDeleteProduct = (name, $collectionId, $id) => {
    confirmSwal(
      `are you sure you want to delete ${name} from the menu?`,
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

  return { confirmUpdateProperty, confirmDeleteProduct };
};

export default useConfirmUpdateProperty;
