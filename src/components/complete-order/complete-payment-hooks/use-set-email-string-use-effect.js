import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCartItemsSelectors from "../../../../hooks/selectors/use-get-cart-items-selectors";
import { setFormattedStringOfOrderForEmail } from "../../../../store/database-management/database-management.slice";

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
    console.log("ji");
    dispatch(resetOrderToRepeatState());
    const parsedCartItems = cartItems.map((cartItem) =>
      JSON.parse(cartItem.cartItem)
    );

    const formattedStringOfOrderForEmail = parsedCartItems.map((item) =>
      formatOrderString(item)
    );

    dispatch(
      setFormattedStringOfOrderForEmail(
        formattedStringOfOrderForEmail.join("\n")
      )
    );
  }, [cartItems, dispatch, path]);
};

export default useSetEmailStringUseEffect;
