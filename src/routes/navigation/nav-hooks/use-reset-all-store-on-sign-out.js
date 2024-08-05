import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../../../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../../../store/sign-up-form/sign-up-form.slice";
import { resetChooseOptionsState } from "../../../store/choose-options/choose-options.slice";
import { resetUploadMenuItemsState } from "../../../store/upload-menu-items/upload-menu-items.slice";
import { resetCartState } from "../../../store/cart/cart.slice";

const useResetAllStoreOnSignOut = () => {
  const dispatch = useDispatch();

  // not including resetMenu as non user also needs it.
  const resetAllStoreOnSignOut = () => {
    dispatch(resetSignInFormState());
    dispatch(resetSignUpFormState());
    dispatch(resetChooseOptionsState());
    dispatch(resetUploadMenuItemsState());
    dispatch(resetCartState());
    localStorage.clear();
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
