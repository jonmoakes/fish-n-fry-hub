import useGetSignInFormSelectors from "../../hooks/selectors/use-get-sign-in-form-selectors";

import { StyledInput, Label } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";

const SignInEmail = ({ dispatchHandleSignInFormChange }) => {
  const { email } = useGetSignInFormSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>email:
      </Label>
      <StyledInput
        type="email"
        name="email"
        value={email || ""}
        onChange={dispatchHandleSignInFormChange}
        required
      />
    </>
  );
};

export default SignInEmail;
