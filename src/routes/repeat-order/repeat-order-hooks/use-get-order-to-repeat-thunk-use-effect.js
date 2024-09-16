import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetOrderToRepeatSelectors from "../../../hooks/selectors/use-get-order-to-repeat-selectors";
import { fetchOrderToRepeatAsync } from "../../../store/order-to-repeat/order-to-repeat.thunks";

const useGetOrderToRepeatThunkUseEffect = () => {
  const { idOfOrderToRepeat } = useGetOrderToRepeatSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!idOfOrderToRepeat) return;
    dispatch(fetchOrderToRepeatAsync({ idOfOrderToRepeat }));
  }, [dispatch, idOfOrderToRepeat]);
};

export default useGetOrderToRepeatThunkUseEffect;
