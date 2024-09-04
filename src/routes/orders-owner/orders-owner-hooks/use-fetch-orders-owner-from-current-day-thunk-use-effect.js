import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { fetchOrdersOwnerFromCurrentDayAsync } from "../../../store/orders-owner/orders-owner.thunks";

const useFetchOrdersOwnerFromCurrentDayThunkUseEffect = () => {
  const { currentUser } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    dispatch(fetchOrdersOwnerFromCurrentDayAsync());
  }, [dispatch, currentUser]);
};

export default useFetchOrdersOwnerFromCurrentDayThunkUseEffect;
