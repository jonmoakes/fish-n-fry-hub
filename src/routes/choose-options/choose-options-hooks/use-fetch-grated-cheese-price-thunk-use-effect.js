import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchGratedCheesePriceAsync } from "../../../store/choose-options/choose-options-thunks";

import useChooseOptionsVariables from "./use-choose-options-variables";

const useFetchGratedCheesePriceThunkUseEffect = () => {
  const { gratedCheesePriceError, hasGratedCheeseOption } =
    useChooseOptionsVariables();

  const dispatch = useDispatch();

  useEffect(() => {
    if (gratedCheesePriceError || !hasGratedCheeseOption) return;

    dispatch(fetchGratedCheesePriceAsync());
  }, [gratedCheesePriceError, dispatch, hasGratedCheeseOption]);
};

export default useFetchGratedCheesePriceThunkUseEffect;
