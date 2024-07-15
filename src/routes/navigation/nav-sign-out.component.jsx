import { selectCurrentUserSelectors } from "../../store/user/user.slice";
// import useSignOutSubmitThunk from "../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-sign-out-submit-thunk";
import useConfirmSwal from "../../hooks/use-confirm-swal";
import useFireSwal from "../../hooks/use-fire-swal";
import useIsOnline from "../../hooks/use-is-online";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { noNetworkMessage } from "../../strings/errors/errors-strings";

import {
  confirmSignOutMessage,
  yesSignOutMessage,
} from "../../strings/confirms/confirms-strings";
import { useSelector } from "react-redux";

const NavSignOut = () => {
  const { currentUser } = useSelector(selectCurrentUserSelectors);
  // const { signOutSubmitThunk } = useSignOutSubmitThunk();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();
  const { isOnline } = useIsOnline();

  const confirmResult = () => {
    console.log("sign out here");
    // signOutSubmitThunk();
  };

  const confirmSignOut = () => {
    confirmSwal(confirmSignOutMessage, "", yesSignOutMessage, confirmResult);
  };

  const showNetworkErrorSwal = () => {
    fireSwal("error", noNetworkMessage, "", 0, true, false);
  };

  return (
    <>
      {!isOnline ? (
        <NavLink onClick={showNetworkErrorSwal}>
          <BorderLink>sign out</BorderLink>
        </NavLink>
      ) : currentUser ? (
        <NavLink onClick={confirmSignOut}>
          <BorderLink>sign out</BorderLink>
        </NavLink>
      ) : null}
    </>
  );
};

export default NavSignOut;
