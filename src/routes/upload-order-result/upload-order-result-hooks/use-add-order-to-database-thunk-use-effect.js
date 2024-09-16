import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import useGetCartItemsSelectors from "../../../hooks/selectors/use-get-cart-items-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { addOrderToDatabaseAsync } from "../../../store/database-management/database-management.thunks";
import useGetOrderToRepeatSelectors from "../../../hooks/selectors/use-get-order-to-repeat-selectors";
import { addRepeatOrderToDatabaseAsync } from "../../../store/order-to-repeat/order-to-repeat.thunks";

const useAddOrderToDatabaseThunkUseEffect = () => {
  const { addOrderResult, addOrderError } = useGetDatabaseManagementSelectors();

  const { cartItems } = useGetCartItemsSelectors();
  const { name, email, id } = useGetCurrentUserSelectors();
  const {
    orderToRepeatDetails,
    repeatOrderForDb,
    orderToRepeatResult,
    orderToRepeatError,
  } = useGetOrderToRepeatSelectors();

  const hasRun = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      addOrderResult ||
      addOrderError ||
      orderToRepeatResult ||
      orderToRepeatError ||
      hasRun.current
    )
      return;

    if (orderToRepeatDetails) {
      dispatch(
        addRepeatOrderToDatabaseAsync({
          name,
          email,
          repeatOrderForDb,
          id,
        })
      );
    } else {
      dispatch(addOrderToDatabaseAsync({ cartItems, name, email, id }));
    }
    hasRun.current = true;
  }, [
    addOrderResult,
    addOrderError,
    orderToRepeatResult,
    orderToRepeatError,
    cartItems,
    dispatch,
    name,
    email,
    id,
    repeatOrderForDb,
    orderToRepeatDetails,
  ]);
};

export default useAddOrderToDatabaseThunkUseEffect;
