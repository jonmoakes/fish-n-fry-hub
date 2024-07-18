import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../store/sign-up-form/sign-up-form.slice";
import { resetMenuState } from "../store/menu/menu.slice";

const useResetAllStoreOnSignOut = () => {
  const dispatch = useDispatch();

  const resetAllStoreOnSignOut = () => {
    dispatch(resetSignInFormState());
    dispatch(resetSignUpFormState());
    dispatch(resetMenuState());
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
