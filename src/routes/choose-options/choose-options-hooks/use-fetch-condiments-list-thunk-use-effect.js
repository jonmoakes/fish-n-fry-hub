import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCondimentsDocumentsAsync } from "../../../store/choose-options/choose-options-thunks";

import useChooseOptionsVariables from "./use-choose-options-variables";

const useFetchCondimentsListThunkUseEffect = () => {
  const { condimentsDocumentsError, hasCondimentsOption } =
    useChooseOptionsVariables();

  const dispatch = useDispatch();

  useEffect(() => {
    if (condimentsDocumentsError || !hasCondimentsOption) return;

    dispatch(fetchCondimentsDocumentsAsync());
  }, [condimentsDocumentsError, dispatch, hasCondimentsOption]);
};

export default useFetchCondimentsListThunkUseEffect;
