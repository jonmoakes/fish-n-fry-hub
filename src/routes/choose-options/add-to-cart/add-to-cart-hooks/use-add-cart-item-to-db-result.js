import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";
import {
  resetAddCartItemResult,
  resetCartItemsError,
} from "../../../../store/cart/cart.slice";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../../strings/errors/errors-strings";
import { cartItemAddedMessage } from "../../../../strings/successes/sucesses-strings";
import { menuRoute } from "../../../../strings/routes/routes-strings";

const useAddCartItemToDbResult = () => {
  const { addCartItemResult, cartItemsError } = useChooseOptionsVariables();

  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (!cartItemsError && !addCartItemResult) return;

    if (addCartItemResult === "fulfilled") {
      fireSwal(
        "success",
        cartItemAddedMessage,
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetAddCartItemResult());
          setTimeout(() => {
            hamburgerHandlerNavigate(menuRoute);
          }, 100);
        }
      });
    } else if (addCartItemResult === "rejected") {
      fireSwal(
        "error",
        errorReceivedMessage(
          "sorry, there was an error adding the cart item.",
          cartItemsError
        ),
        "",
        false,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetAddCartItemResult());
          dispatch(resetCartItemsError());
        }
      });
    }
  }, [
    addCartItemResult,
    cartItemsError,
    dispatch,
    fireSwal,
    hamburgerHandlerNavigate,
  ]);
};

export default useAddCartItemToDbResult;
