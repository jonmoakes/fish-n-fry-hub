import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCartItemsSelectors from "../../../hooks/selectors/use-get-cart-items-selectors";
import { setHumanReadableOrderDetails } from "../../../store/database-management/database-management.slice";

import { formatOrderString } from "../../../functions/format-order-string/fomat-order-string";

const useSetEmailStringUseEffect = () => {
  const { cartItems } = useGetCartItemsSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    const parsedCartItems = cartItems.map((cartItem) =>
      JSON.parse(cartItem.cartItem)
    );

    const humanReadableOrderDetails = parsedCartItems.map((item) =>
      formatOrderString(item)
    );

    dispatch(
      setHumanReadableOrderDetails(humanReadableOrderDetails.join("\n"))
    );
  }, [cartItems, dispatch]);
};

export default useSetEmailStringUseEffect;
