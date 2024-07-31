import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCansDocumentsAsync } from "../../../store/choose-options/choose-options-thunks";

import useChooseOptionsVariables from "./use-choose-options-variables";

const useFetchCansListThunkUseEffect = () => {
  const { canDocumentsError, hasChooseCanOption } = useChooseOptionsVariables();

  const dispatch = useDispatch();

  useEffect(() => {
    if (canDocumentsError || !hasChooseCanOption) return;

    dispatch(fetchCansDocumentsAsync());
  }, [canDocumentsError, dispatch, hasChooseCanOption]);
};

export default useFetchCansListThunkUseEffect;
