import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCartItemsSelectors from "../../../../hooks/selectors/use-get-cart-items-selectors";
import {
  resetUpdateCartItemQuantityError,
  resetUpdateCartItemQuantityResult,
} from "../../../../store/cart/cart.slice";
import useFireSwal from "../../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../../strings/errors/errors-strings";

const useUpdateCartItemQuantityResultUseEffect = () => {
  const { updateCartItemQuantityResult, updateCartItemQuantityError } =
    useGetCartItemsSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!updateCartItemQuantityResult && !updateCartItemQuantityError) return;

    if (updateCartItemQuantityResult === "fulfilled") {
      fireSwal("success", "success", "", 1000, "", false, "", true);

      dispatch(resetUpdateCartItemQuantityResult());
    } else if (updateCartItemQuantityResult === "rejected") {
      fireSwal(
        "error",
        errorReceivedMessage(
          "sorry, the was an error updating the quantity.",
          updateCartItemQuantityError
        ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetUpdateCartItemQuantityResult());
          dispatch(resetUpdateCartItemQuantityError());
        }
      });
    }
  }, [
    updateCartItemQuantityResult,
    updateCartItemQuantityError,
    dispatch,
    fireSwal,
  ]);
};

export default useUpdateCartItemQuantityResultUseEffect;
