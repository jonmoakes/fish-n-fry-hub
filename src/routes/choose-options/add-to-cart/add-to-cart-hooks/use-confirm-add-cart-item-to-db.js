import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import { addCartItemToDatabaseAsync } from "../../../../store/cart/cart.thunks";
import useGetItemToAddToCart from "./use-get-item-to-add-to-cart";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";

const useConfirmAddCartItemToDb = () => {
  const { id } = useGetCurrentUserSelectors();
  const { cartItem } = useGetItemToAddToCart();
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(addCartItemToDatabaseAsync({ id, cartItem }));
  };

  const confirmAddCartItemToDb = () => {
    confirmSwal(
      "add this item to your cart?",
      "",
      "yes, add it!",
      confirmResult
    );
  };

  return { confirmAddCartItemToDb };
};

export default useConfirmAddCartItemToDb;
