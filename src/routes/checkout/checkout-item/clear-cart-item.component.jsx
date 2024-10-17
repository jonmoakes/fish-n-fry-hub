import { useDispatch } from "react-redux";

import { removeCartItemAsync } from "../../../store/cart/cart.thunks";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { RemoveItemSpan } from "../../../styles/span/span.styles";

import { confirmClearCartItemMessage } from "../../../strings/confirms/confirms-strings";
import { removeCartItemButtonText } from "../../../strings/info/info-strings";

const ClearCartItem = ({ $id }) => {
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const confirmResult = async () => {
    dispatch(removeCartItemAsync({ $id }));
  };

  const confirmRemoveItem = () => {
    confirmSwal(
      confirmClearCartItemMessage,
      "",
      removeCartItemButtonText,
      "",
      confirmResult,
      null
    );
  };

  return (
    <RemoveItemSpan onClick={confirmRemoveItem}>
      &#10006;&#xFE0E;
    </RemoveItemSpan>
  );
};

export default ClearCartItem;
