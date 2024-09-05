import { useEffect } from "react";
import useGetMenuSelectors from "../../../hooks/selectors/use-get-menu-selectors";
import { useDispatch } from "react-redux";
import { checkForNewMenuItemsAsync } from "../../../store/menu/menu-thunks";

const useCheckForNewMenuItemsThunkUseEffect = () => {
  const { hasNewMenuItemsResult } = useGetMenuSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (hasNewMenuItemsResult) return;
    dispatch(checkForNewMenuItemsAsync());
  }, [hasNewMenuItemsResult, dispatch]);
};

export default useCheckForNewMenuItemsThunkUseEffect;
