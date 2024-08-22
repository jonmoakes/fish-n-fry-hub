import { useSelector } from "react-redux";
import { selectCartSelectors } from "../../store/cart/cart.slice";

const useGetCartItemsSelectors = () => {
  const {
    cartItemsIsLoading,
    cartItems,
    fetchCartItemsResult,
    fetchCartItemsError,
    addCartItemResult,
    addCartItemsError,
    removeCartItemResult,
    removeCartItemError,
    updateCartItemQuantityResult,
    updateCartItemQuantityError,
    grandTotal,
  } = useSelector(selectCartSelectors);

  return {
    cartItemsIsLoading,
    cartItems,
    fetchCartItemsResult,
    fetchCartItemsError,
    addCartItemResult,
    addCartItemsError,
    removeCartItemResult,
    removeCartItemError,
    updateCartItemQuantityResult,
    updateCartItemQuantityError,
    grandTotal,
  };
};

export default useGetCartItemsSelectors;
