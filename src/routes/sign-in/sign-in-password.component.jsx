import { useEffect } from "react";

import useGetSignInFormSelectors from "../../hooks/selectors/use-get-sign-in-form-selectors.js";
import useGetPasswordIsVisibleSelectors from "../../hooks/selectors/use-get-password-is-visible-selectors";
import useSignInFormFunctions from "./sign-in-form-hooks/use-sign-in-form-functions";

import { RelativePositionDiv } from "../../styles/div/div.styles";
import { Label, PasswordInput } from "../../styles/form/form.styles";
import { RedSpan, SignInPasswordEye } from "../../styles/span/span.styles";

const SignInPassword = ({ dispatchHandleSignInFormChange }) => {
  const { password } = useGetSignInFormSelectors();
  const { signInPasswordIsVisible } = useGetPasswordIsVisibleSelectors();
  const {
    dispatchHideSignInPasswordIsVisible,
    dispatchToggleSignInPasswordIsVisible,
  } = useSignInFormFunctions();

  useEffect(() => {
    if (signInPasswordIsVisible && !password.length) {
      dispatchHideSignInPasswordIsVisible();
    }
  }, [password, signInPasswordIsVisible, dispatchHideSignInPasswordIsVisible]);

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>password:
      </Label>
      <RelativePositionDiv>
        <PasswordInput
          name="password"
          onChange={dispatchHandleSignInFormChange}
          value={password || ""}
          required
          type={signInPasswordIsVisible ? "text" : "password"}
        />

        {password.length ? (
          <SignInPasswordEye
            {...{ signInPasswordIsVisible }}
            onClick={dispatchToggleSignInPasswordIsVisible}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

export default SignInPassword;
