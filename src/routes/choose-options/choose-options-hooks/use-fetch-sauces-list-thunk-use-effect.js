import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchSaucesDocumentsAsync } from "../../../store/choose-options/choose-options-thunks";

import useChooseOptionsVariables from "./use-choose-options-variables";

const useFetchSaucesListThunkUseEffect = () => {
  const { saucesDocumentsError, hasSaucesOption } = useChooseOptionsVariables();

  const dispatch = useDispatch();

  useEffect(() => {
    if (saucesDocumentsError || !hasSaucesOption) return;

    dispatch(fetchSaucesDocumentsAsync());
  }, [saucesDocumentsError, dispatch, hasSaucesOption]);
};

export default useFetchSaucesListThunkUseEffect;
