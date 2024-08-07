import { useSelector } from "react-redux";
import { selectCartSelectors } from "../../store/cart/cart.slice";

const useGetCartItemsSelectors = () => {
  const {
    cartItemsIsLoading,
    cartItems,
    addCartItemResult,
    cartItemsError,
    grandTotal,
  } = useSelector(selectCartSelectors);

  return {
    cartItemsIsLoading,
    cartItems,
    addCartItemResult,
    cartItemsError,
    grandTotal,
  };
};

export default useGetCartItemsSelectors;
