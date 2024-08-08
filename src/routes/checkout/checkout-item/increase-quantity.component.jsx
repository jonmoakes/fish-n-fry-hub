import { useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { updateCartItemQuantityAsync } from "../../../store/cart/cart.thunks";

import { AddArrow } from "../../../styles/svg/svg.styles";

import { confirmIncreaseQuantityMessage } from "../../../strings/confirms/confirms-strings";

const IncreaseQuantity = ({ $id }) => {
  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const increaseQuantity = () => {
    const operation = "add";
    dispatch(updateCartItemQuantityAsync({ $id, operation }));
  };

  const confirmIncreaseQuantity = () => {
    confirmSwal(
      confirmIncreaseQuantityMessage,
      "",
      "yes",
      increaseQuantity,
      null
    );
  };

  return (
    <>
      <AddArrow onClick={confirmIncreaseQuantity}>&#10095;</AddArrow>
    </>
  );
};

export default IncreaseQuantity;
