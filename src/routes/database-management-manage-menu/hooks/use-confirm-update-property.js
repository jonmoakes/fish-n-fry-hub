import { useDispatch } from "react-redux";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { updateProductAttributeAsync } from "../../../store/database-management/database-management.thunks";

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

  return { confirmUpdateProperty };
};

export default useConfirmUpdateProperty;
