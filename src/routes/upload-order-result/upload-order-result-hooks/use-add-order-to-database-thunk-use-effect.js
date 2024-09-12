import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import useGetCartItemsSelectors from "../../../hooks/selectors/use-get-cart-items-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { addOrderToDatabaseAsync } from "../../../store/database-management/database-management.thunks";

const useAddOrderToDatabaseThunkUseEffect = () => {
  const { addOrderResult, addOrderError } = useGetDatabaseManagementSelectors();
  const { cartItems } = useGetCartItemsSelectors();
  const { name, email, id } = useGetCurrentUserSelectors();

  const hasRun = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (addOrderResult || addOrderError || hasRun.current) return;
    dispatch(addOrderToDatabaseAsync({ cartItems, name, email, id }));
    hasRun.current = true;
  }, [addOrderResult, addOrderError, cartItems, dispatch, name, email, id]);
};

export default useAddOrderToDatabaseThunkUseEffect;
