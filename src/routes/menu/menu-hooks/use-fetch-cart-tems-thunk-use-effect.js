import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { fetchUserCartItemsAsync } from "../../../store/cart/cart.thunks";
import useMenuLogic from "./use-menu-logic";

const useFetchCartItemsThunkUseEffect = () => {
  const { id } = useGetCurrentUserSelectors();
  const { noCurrentUserOrCartItemsFetchedOrCartFetchError } = useMenuLogic();

  const dispatch = useDispatch();

  useEffect(() => {
    if (noCurrentUserOrCartItemsFetchedOrCartFetchError) return;

    dispatch(fetchUserCartItemsAsync({ id })).then((resultAction) => {
      if (fetchUserCartItemsAsync.fulfilled.match(resultAction)) {
        localStorage.setItem("cartItemsHaveBeenFetched", true);
      }
    });
  }, [dispatch, id, noCurrentUserOrCartItemsFetchedOrCartFetchError]);
};

export default useFetchCartItemsThunkUseEffect;
