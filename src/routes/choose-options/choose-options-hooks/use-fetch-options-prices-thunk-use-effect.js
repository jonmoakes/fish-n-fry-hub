import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  fetchOptionsPricesDocumentsAsync,
  getCansDocumentsAsync,
} from "../../../store/choose-options/choose-options-thunks";

import useChooseOptionsVariables from "./use-choose-options-variables";

const useFetchOptionsPricesThunkUseEffect = () => {
  const {
    optionsPricesError,
    hasGratedCheeseOption,
    hasDonerMeatOption,
    hasChooseCanOption,
  } = useChooseOptionsVariables();

  const dispatch = useDispatch();

  useEffect(() => {
    if (optionsPricesError || (!hasGratedCheeseOption && !hasDonerMeatOption))
      return;

    dispatch(fetchOptionsPricesDocumentsAsync()).then((resultAction) => {
      if (
        fetchOptionsPricesDocumentsAsync.fulfilled.match(resultAction) &&
        hasChooseCanOption
      ) {
        dispatch(getCansDocumentsAsync());
      }
    });
  }, [
    optionsPricesError,
    dispatch,
    hasDonerMeatOption,
    hasGratedCheeseOption,
    hasChooseCanOption,
  ]);
};

export default useFetchOptionsPricesThunkUseEffect;
