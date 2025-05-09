import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMenuDocumentsAsync } from "../../../store/menu/menu-thunks";
import useMenuLogic from "./use-menu-logic";

const useFetchMenuDocumentsThunkUseEffect = () => {
  const { hasMenuError } = useMenuLogic();
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasMenuError) return;

    dispatch(fetchMenuDocumentsAsync());
  }, [dispatch, hasMenuError]);
};

export default useFetchMenuDocumentsThunkUseEffect;
