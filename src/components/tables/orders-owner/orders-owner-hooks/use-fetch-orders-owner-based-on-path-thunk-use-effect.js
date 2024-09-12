import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import {
  fetchOrdersOwnerFromCurrentDayAsync,
  fetchOrdersOwnerAllTimeOrdersAsync,
} from "../../../../store/orders-owner/orders-owner.thunks";

import {
  ordersOwnerAllTimeOrdersRoute,
  ordersOwnerRoute,
} from "../../../../strings/routes/routes-strings";

import { appOwnerId } from "../../../../constants/constants";

const useFetchOrdersOwnerBasedOnPathThunkUseEffect = () => {
  const { currentUser } = useGetCurrentUserSelectors();

  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || (currentUser && currentUser.id !== appOwnerId)) return;

    if (path === ordersOwnerRoute) {
      dispatch(fetchOrdersOwnerFromCurrentDayAsync());
    } else if (path === ordersOwnerAllTimeOrdersRoute) {
      dispatch(fetchOrdersOwnerAllTimeOrdersAsync());
    }
  }, [dispatch, currentUser, path]);
};

export default useFetchOrdersOwnerBasedOnPathThunkUseEffect;
