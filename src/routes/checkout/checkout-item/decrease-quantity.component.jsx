// import { useDispatch, useSelector } from "react-redux";

// import useConfirmSwal from "../../../hooks/use-confirm-swal";
// import useFireSwal from "../../../hooks/use-fire-swal";

// import { decreaseItemQuantity } from "../../../store/cart/cart.action";
// import { selectCartItems } from "../../../store/cart/cart.selector";

import { MinusArrow } from "../../../styles/svg/svg.styles";

// import {
//   successMessage,
//   confirmDecreaseQuantityMessage,
//   yesMessage,
// } from "../../../strings/strings";

const DecreaseQuantity = ({ cartItemObject }) => {
  // const { fireSwal } = useFireSwal();
  // const { confirmSwal } = useConfirmSwal();

  // const cartItems = useSelector(selectCartItems);
  // const dispatch = useDispatch();

  // const confirmResult = () => {
  //   dispatch(decreaseItemQuantity(cartItems, cartItem));
  //   fireSwal("success", successMessage, "", 1000, false, true);
  // };

  // const confirmDecreaseQuantity = () => {
  //   confirmSwal(
  //     confirmDecreaseQuantityMessage,
  //     "",
  //     yesMessage,
  //     confirmResult,
  //     null
  //   );
  // };

  return (
    <>
      <MinusArrow onClick={() => console.log("decrease")}>&#10095;</MinusArrow>
    </>
  );
};

export default DecreaseQuantity;
