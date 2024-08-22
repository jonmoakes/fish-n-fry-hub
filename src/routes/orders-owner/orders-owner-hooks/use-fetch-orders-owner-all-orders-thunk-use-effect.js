import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { fetchOrdersOwnerAllOrdersAsync } from "../../../store/orders-owner/orders-owner.thunks";

const useFetchOrdersOwnerAllOrdersThunkUseEffect = () => {
  const { currentUser } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    dispatch(fetchOrdersOwnerAllOrdersAsync());
  }, [dispatch, currentUser]);
};

export default useFetchOrdersOwnerAllOrdersThunkUseEffect;
