// import { useDispatch, useSelector } from "react-redux";

// import useConfirmSwal from "../../../hooks/use-confirm-swal";
// import useFireSwal from "../../../hooks/use-fire-swal";

// import { increaseItemQuantity } from "../../../store/cart/cart.action";
// import { selectCartItems } from "../../../store/cart/cart.selector";

import { AddArrow } from "../../../styles/svg/svg.styles";

// import {
//   successMessage,
//   confirmIncreaseQuantityMessage,
//   yesMessage,
// } from "../../../strings/strings";

const IncreaseQuantity = ({ cartItemObject }) => {
  // const { fireSwal } = useFireSwal();
  // const { confirmSwal } = useConfirmSwal();

  // const cartItems = useSelector(selectCartItems);
  // const dispatch = useDispatch();

  // const confirmResult = () => {
  //   dispatch(increaseItemQuantity(cartItems, cartItem));
  //   fireSwal("success", successMessage, "", 1000, false, true);
  // };

  // const confirmIncreaseQuantity = () => {
  //   confirmSwal(
  //     confirmIncreaseQuantityMessage,
  //     "",
  //     yesMessage,
  //     confirmResult,
  //     null
  //   );
  // };

  return (
    <>
      <AddArrow onClick={() => console.log("increase")}>&#10095;</AddArrow>
    </>
  );
};

export default IncreaseQuantity;
