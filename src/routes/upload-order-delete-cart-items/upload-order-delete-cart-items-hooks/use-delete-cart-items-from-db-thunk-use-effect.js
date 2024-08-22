import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import useGetCartItemsSelectors from "../../../hooks/selectors/use-get-cart-items-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { deleteUserCartItemsAsync } from "../../../store/database-management/database-management.thunks";

const useDeleteCartItemsFromDbThunkUseEffect = () => {
  const { deleteUserCartItemsResult, deleteUserCartItemsError } =
    useGetDatabaseManagementSelectors();
  const { cartItems } = useGetCartItemsSelectors();
  const { id } = useGetCurrentUserSelectors();
  const hasRun = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (deleteUserCartItemsResult || deleteUserCartItemsError || hasRun.current)
      return;

    dispatch(deleteUserCartItemsAsync({ id }));
    hasRun.current = true;
  }, [
    deleteUserCartItemsResult,
    deleteUserCartItemsError,
    dispatch,
    id,
    cartItems,
  ]);
};

export default useDeleteCartItemsFromDbThunkUseEffect;
