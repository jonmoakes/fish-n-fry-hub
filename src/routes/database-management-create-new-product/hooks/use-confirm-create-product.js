import { useDispatch } from "react-redux";

import { createNewMenuProductAsync } from "../../../store/database-management/database-management.thunks";
import useCreateProductLogic from "./use-create-product-logic";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import { confirmCreateProductMessage } from "../../../strings/confirms/confirms-strings";
import {
  hasCondimentsErrorMessage,
  hasMeatsErrorMessage,
  hasSaucesErrorMessage,
  hasSizeErrorMessage,
} from "../../../strings/errors/errors-strings";

const useConfirmCreateProduct = () => {
  const {
    productToAdd,
    hasSizeError,
    hasSaucesError,
    hasCondimentsError,
    hasMeatsError,
  } = useCreateProductLogic();

  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const confirmCreateProduct = () => {
    if (hasSizeError) {
      fireSwal("error", hasSizeErrorMessage, "", 0, "", false, "", false);
    } else if (hasSaucesError) {
      fireSwal("error", hasSaucesErrorMessage, "", 0, "", false, "", false);
    } else if (hasCondimentsError) {
      fireSwal("error", hasCondimentsErrorMessage, "", 0, "", false, "", false);
    } else if (hasMeatsError) {
      fireSwal("error", hasMeatsErrorMessage, "", 0, "", false, "", false);
    } else {
      confirmSwal(
        confirmCreateProductMessage,
        "",
        "create product",
        "",
        () => dispatch(createNewMenuProductAsync({ productToAdd })),
        null
      );
    }
  };

  return { confirmCreateProduct };
};

export default useConfirmCreateProduct;
