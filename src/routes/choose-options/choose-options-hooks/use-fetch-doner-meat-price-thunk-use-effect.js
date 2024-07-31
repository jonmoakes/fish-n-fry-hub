import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchDonerMeatPriceAsync } from "../../../store/choose-options/choose-options-thunks";

import useChooseOptionsVariables from "./use-choose-options-variables";

const useFetchDonerMeatPriceThunkUseEffect = () => {
  const { donerMeatPriceError, hasDonerMeatOption } =
    useChooseOptionsVariables();

  const dispatch = useDispatch();

  useEffect(() => {
    if (donerMeatPriceError || !hasDonerMeatOption) return;

    dispatch(fetchDonerMeatPriceAsync());
  }, [donerMeatPriceError, dispatch, hasDonerMeatOption]);
};

export default useFetchDonerMeatPriceThunkUseEffect;
