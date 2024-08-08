import { useSelector } from "react-redux";
import { selectCartSelectors } from "../../store/cart/cart.slice";

const useGetCartItemsSelectors = () => {
  const {
    cartItemsIsLoading,
    cartItems,
    addCartItemResult,
    cartItemsError,
    updateCartItemQuantityResult,
    updateCartItemQuantityError,
    removeCartItemResult,
    removeCartItemError,
    grandTotal,
  } = useSelector(selectCartSelectors);

  return {
    cartItemsIsLoading,
    cartItems,
    addCartItemResult,
    cartItemsError,
    updateCartItemQuantityResult,
    updateCartItemQuantityError,
    removeCartItemResult,
    removeCartItemError,
    grandTotal,
  };
};

export default useGetCartItemsSelectors;
