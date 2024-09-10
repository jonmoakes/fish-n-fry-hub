import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import { requestIncomeDataAsync } from "../../../store/income-data/income-data.thunks";

const useFetchIncomeDataThunkUseEffect = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const stripeSecretKey = import.meta.env.VITE_STRIPE_SECRET_KEY;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!stripeSecretKey || !currentUser) return;

    dispatch(requestIncomeDataAsync({ stripeSecretKey }));
  }, [stripeSecretKey, currentUser, dispatch]);
};

export default useFetchIncomeDataThunkUseEffect;
