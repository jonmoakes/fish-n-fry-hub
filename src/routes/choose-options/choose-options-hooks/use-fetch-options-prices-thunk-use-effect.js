import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchOptionsPricesDocumentsAsync } from "../../../store/choose-options/choose-options-thunks";
import useChooseOptionsVariables from "./use-choose-options-variables";

const useFetchOptionsPricesThunkUseEffect = () => {
  const { optionsPricesError, hasOptions } = useChooseOptionsVariables();

  const dispatch = useDispatch();

  useEffect(() => {
    if (optionsPricesError || !hasOptions) return;

    dispatch(fetchOptionsPricesDocumentsAsync());
  }, [optionsPricesError, dispatch, hasOptions]);
};

export default useFetchOptionsPricesThunkUseEffect;
