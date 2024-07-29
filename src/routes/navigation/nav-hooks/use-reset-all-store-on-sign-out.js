import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../../../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../../../store/sign-up-form/sign-up-form.slice";
import { resetMenuState } from "../../../store/menu/menu.slice";
import { resetChooseOptionsState } from "../../../store/choose-options/choose-options.slice";
import { resetUploadMenuItemsState } from "../../../store/upload-menu-items/upload-menu-items.slice";

const useResetAllStoreOnSignOut = () => {
  const dispatch = useDispatch();

  const resetAllStoreOnSignOut = () => {
    dispatch(resetSignInFormState());
    dispatch(resetSignUpFormState());
    dispatch(resetMenuState());
    dispatch(resetChooseOptionsState());
    dispatch(resetUploadMenuItemsState());
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
