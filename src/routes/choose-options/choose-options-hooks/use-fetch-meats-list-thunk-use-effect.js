import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMeatsDocumentsAsync } from "../../../store/choose-options/choose-options-thunks";

import useChooseOptionsVariables from "./use-choose-options-variables";

const useFetchMeatsListThunkUseEffect = () => {
  const { meatsDocumentsError, hasMeatsOption } = useChooseOptionsVariables();

  const dispatch = useDispatch();

  useEffect(() => {
    if (meatsDocumentsError || !hasMeatsOption) return;

    dispatch(fetchMeatsDocumentsAsync());
  }, [meatsDocumentsError, dispatch, hasMeatsOption]);
};

export default useFetchMeatsListThunkUseEffect;
