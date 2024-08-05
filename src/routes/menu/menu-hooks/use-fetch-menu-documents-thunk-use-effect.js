import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMenuDocumentsAsync } from "../../../store/menu/menu-thunks";
import useMenuLogic from "./use-menu-logic";

const useFetchMenuDocumentsThunkUseEffect = () => {
  const {
    menuError,
    hasMenuErrorOrMenuHasBeenFetched,
    noUserAndHasMenuDocs,
    noUserAndNoMenuDocs,
    isCurrentUserAndMenuHasNotBeenFetched,
  } = useMenuLogic();
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasMenuErrorOrMenuHasBeenFetched || noUserAndHasMenuDocs) return;

    if (noUserAndNoMenuDocs || isCurrentUserAndMenuHasNotBeenFetched) {
      dispatch(fetchMenuDocumentsAsync()).then((resultAction) => {
        if (fetchMenuDocumentsAsync.fulfilled.match(resultAction)) {
          localStorage.setItem("menuHasBeenFetched", "true");
        }
      });
    }
  }, [
    menuError,
    dispatch,
    hasMenuErrorOrMenuHasBeenFetched,
    isCurrentUserAndMenuHasNotBeenFetched,
    noUserAndNoMenuDocs,
    noUserAndHasMenuDocs,
  ]);
};

export default useFetchMenuDocumentsThunkUseEffect;
