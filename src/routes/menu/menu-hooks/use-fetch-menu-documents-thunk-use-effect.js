import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMenuDocumentsAsync } from "../../../store/menu/menu-thunks";
import useMenuLogic from "./use-menu-logic";

const useFetchMenuDocumentsThunkUseEffect = () => {
  const { menuError } = useMenuLogic();
  const dispatch = useDispatch();

  useEffect(() => {
    if (menuError) return;

    dispatch(fetchMenuDocumentsAsync());
  }, [menuError, dispatch]);
};

export default useFetchMenuDocumentsThunkUseEffect;
