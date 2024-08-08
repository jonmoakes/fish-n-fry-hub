import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCartItemsSelectors from "../../../../hooks/selectors/use-get-cart-items-selectors";
import {
  resetRemoveCartItemError,
  resetRemoveCartItemResult,
} from "../../../../store/cart/cart.slice";
import useFireSwal from "../../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../../strings/errors/errors-strings";

const useRemoveCartItemResultUseEffect = () => {
  const { removeCartItemResult, removeCartItemError } =
    useGetCartItemsSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!removeCartItemResult && !removeCartItemError) return;

    if (removeCartItemResult === "fulfilled") {
      fireSwal("success", "success", "", 1000, false, true);
      setTimeout(() => {
        dispatch(resetRemoveCartItemResult());
      }, 200);
    } else if (removeCartItemResult === "rejected") {
      fireSwal(
        "error",
        errorReceivedMessage(
          "there was an error removing the item.",
          removeCartItemError
        ),
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetRemoveCartItemResult());
          dispatch(resetRemoveCartItemError());
        }
      });
    }
  }, [removeCartItemResult, removeCartItemError, dispatch, fireSwal]);
};

export default useRemoveCartItemResultUseEffect;
