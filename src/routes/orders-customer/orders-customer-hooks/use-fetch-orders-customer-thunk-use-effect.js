import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { fetchOrdersCustomerAsync } from "../../../store/orders-customer/orders-customer.thunks";

import { appOwnerId } from "../../../constants/constants";

const useFetchOrdersCustomerThunkUseEffect = () => {
  const { currentUser, id } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || (currentUser && id === appOwnerId)) return;

    dispatch(fetchOrdersCustomerAsync({ id }));
  }, [dispatch, currentUser, id]);
};

export default useFetchOrdersCustomerThunkUseEffect;
