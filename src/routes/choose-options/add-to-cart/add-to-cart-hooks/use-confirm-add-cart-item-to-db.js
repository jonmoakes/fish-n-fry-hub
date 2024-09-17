import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import { addCartItemToDatabaseAsync } from "../../../../store/cart/cart.thunks";
import useGetItemToAddToCart from "./use-get-item-to-add-to-cart";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import { confirmAddItemToCartMessage } from "../../../../strings/confirms/confirms-strings";
import { yesAddItMessage } from "../../../../strings/successes/sucesses-strings";

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
      confirmAddItemToCartMessage,
      "",
      yesAddItMessage,
      "",
      confirmResult
    );
  };

  return { confirmAddCartItemToDb };
};

export default useConfirmAddCartItemToDb;
