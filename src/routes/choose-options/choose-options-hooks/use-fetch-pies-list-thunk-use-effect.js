import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchPiesDocumentsAsync } from "../../../store/choose-options/choose-options-thunks";

import useChooseOptionsVariables from "./use-choose-options-variables";

const useFetchPiesListThunkUseEffect = () => {
  const { piesDocumentsError, hasChoosePieOption } =
    useChooseOptionsVariables();

  const dispatch = useDispatch();

  useEffect(() => {
    if (piesDocumentsError || !hasChoosePieOption) return;

    dispatch(fetchPiesDocumentsAsync());
  }, [piesDocumentsError, dispatch, hasChoosePieOption]);
};

export default useFetchPiesListThunkUseEffect;
