import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCartItemsSelectors from "../../../../hooks/selectors/use-get-cart-items-selectors";
import { setHumanReadableOrderDetails } from "../../../../store/database-management/database-management.slice";

import { formatOrderString } from "../../../../functions/format-order-string/fomat-order-string";
import { checkoutRoute } from "../../../strings/routes/routes-strings";
import { resetOrderToRepeatState } from "../../../store/order-to-repeat/order-to-repeat.slice";

const useSetEmailStringUseEffect = () => {
  const { cartItems } = useGetCartItemsSelectors();

  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (path !== checkoutRoute) return;
    dispatch(resetOrderToRepeatState());

    const parsedCartItems = cartItems.map((cartItem) =>
      JSON.parse(cartItem.cartItem)
    );
    const humanReadableOrderDetails = parsedCartItems.map((item) =>
      formatOrderString(item)
    );

    dispatch(
      setHumanReadableOrderDetails(humanReadableOrderDetails.join("\n"))
    );
  }, [cartItems, dispatch, path]);
};

export default useSetEmailStringUseEffect;
