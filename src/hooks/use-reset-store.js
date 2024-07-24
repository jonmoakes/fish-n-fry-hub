import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../store/sign-up-form/sign-up-form.slice";
import { resetMenuState } from "../store/menu/menu.slice";
import { resetChooseOptionsState } from "../store/choose-options/choose-options.slice";

import {
  signInRoute,
  signUpRoute,
  menuRoute,
  chooseOptionsRoute,
} from "../strings/routes/routes-strings";

const useResetStore = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;

  const resetStore = () => {
    switch (path) {
      case signInRoute:
        dispatch(resetSignInFormState());
        break;
      case signUpRoute:
        dispatch(resetSignUpFormState());
        break;
      case menuRoute:
        dispatch(resetMenuState());
        break;

      case chooseOptionsRoute:
        dispatch(resetChooseOptionsState());
        break;
      default:
        return;
    }
  };

  return { resetStore };
};

export default useResetStore;
