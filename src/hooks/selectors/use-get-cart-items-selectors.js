import { useSelector } from "react-redux";
import { selectCartSelectors } from "../../store/cart/cart.slice";

const useGetCartItemsSelectors = () => {
  const { cartItemsIsLoading, cartItems, addCartItemResult, cartItemsError } =
    useSelector(selectCartSelectors);

  return { cartItemsIsLoading, cartItems, addCartItemResult, cartItemsError };
};

export default useGetCartItemsSelectors;
