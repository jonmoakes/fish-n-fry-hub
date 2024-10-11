import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import { createNewMenuProductAsync } from "../../../store/database-management/database-management.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { confirmCreateProductMessage } from "../../../strings/confirms/confirms-strings";

const useConfirmCreateProduct = () => {
  const { productToAdd } = useGetDatabaseManagementSelectors();

  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const confirmCreateProduct = () => {
    confirmSwal(
      confirmCreateProductMessage,
      "",
      "create product",
      "",
      () => dispatch(createNewMenuProductAsync({ productToAdd })),
      null
    );
  };

  return { confirmCreateProduct };
};

export default useConfirmCreateProduct;
