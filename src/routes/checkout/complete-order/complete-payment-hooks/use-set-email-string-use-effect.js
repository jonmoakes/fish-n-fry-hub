import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCartItemsSelectors from "../../../../hooks/selectors/use-get-cart-items-selectors";
import { setFormattedStringOfOrderForEmail } from "../../../../store/database-management/database-management.slice";

import { formatOrderString } from "../../../../functions/format-order-string/fomat-order-string";

const useSetEmailStringUseEffect = () => {
  const { cartItems } = useGetCartItemsSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    const parsedCartItems = cartItems.map((cartItem) =>
      JSON.parse(cartItem.cartItem)
    );

    const formattedStringOfOrderForEmail = parsedCartItems.map((item) =>
      formatOrderString(item)
    );
    dispatch(setFormattedStringOfOrderForEmail(formattedStringOfOrderForEmail));
  }, [cartItems, dispatch]);
};

export default useSetEmailStringUseEffect;
