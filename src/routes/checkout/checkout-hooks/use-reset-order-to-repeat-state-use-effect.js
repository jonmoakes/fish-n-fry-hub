import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { resetOrderToRepeatState } from "../../../store/order-to-repeat/order-to-repeat.slice";

const useResetOrderToRepeatStateUseEffect = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //to make sure there is no error in the amount being taken if user has visited repeat order page
    dispatch(resetOrderToRepeatState());
  }, [dispatch]);
};

export default useResetOrderToRepeatStateUseEffect;
