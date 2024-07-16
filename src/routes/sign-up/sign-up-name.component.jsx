import { CapitalizedInput, Label } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";

const SignUpName = ({ dispatchHandleSignUpFormChange }) => {
  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>name:
      </Label>
      <CapitalizedInput
        type="text"
        name="name"
        onChange={dispatchHandleSignUpFormChange}
        required
      />
    </>
  );
};

export default SignUpName;
