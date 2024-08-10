import { useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { updateCartItemQuantityAsync } from "../../../store/cart/cart.thunks";

import { MinusArrow } from "../../../styles/svg/svg.styles";

import { confirmDecreaseQuantityMessage } from "../../../strings/confirms/confirms-strings";

const DecreaseQuantity = ({ $id }) => {
  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const decreaseQuantity = () => {
    const operation = "deduct";
    dispatch(updateCartItemQuantityAsync({ $id, operation }));
  };

  const confirmDecreaseQuantity = () => {
    confirmSwal(
      confirmDecreaseQuantityMessage,
      "",
      "yes",
      "",
      decreaseQuantity,
      null
    );
  };

  return (
    <>
      <MinusArrow onClick={confirmDecreaseQuantity}>&#10095;</MinusArrow>
    </>
  );
};

export default DecreaseQuantity;
