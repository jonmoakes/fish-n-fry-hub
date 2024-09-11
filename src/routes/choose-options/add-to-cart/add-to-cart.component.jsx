import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useCombinedRequiredCheck from "./add-to-cart-hooks/use-combined-required-check";
import useIsOnline from "../../../hooks/use-is-online";

import NeedToSignIn from "./need-to-sign-in.component";
import ShowOptionsFormErrors from "./show-options-form-errors/show-options-form-errors.component";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import useConfirmAddCartItemToDb from "./add-to-cart-hooks/use-confirm-add-cart-item-to-db";
import useAddCartItemToDbResult from "./add-to-cart-hooks/use-add-cart-item-to-db-result";
import NetworkError from "../../../components/errors/network-error.component";

const AddToCart = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { requiredChecksPassed } = useCombinedRequiredCheck();
  const { confirmAddCartItemToDb } = useConfirmAddCartItemToDb();
  useAddCartItemToDbResult();
  const { isOnline } = useIsOnline();

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : currentUser && requiredChecksPassed ? (
        <ParentDiv>
          <YellowGreenButton onClick={confirmAddCartItemToDb}>
            add to cart
          </YellowGreenButton>
        </ParentDiv>
      ) : !currentUser ? (
        <NeedToSignIn />
      ) : currentUser && !requiredChecksPassed ? (
        <>
          <ParentDiv>
            <ShowOptionsFormErrors />
          </ParentDiv>
        </>
      ) : null}
    </>
  );
};

export default AddToCart;
