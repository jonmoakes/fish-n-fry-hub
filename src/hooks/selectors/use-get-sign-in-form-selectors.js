import { useSelector } from "react-redux";

import { selectSignInFormSelectors } from "../../store/sign-in-form/sign-in-form.slice";

const useGetSignInFormSelectors = () => {
  const { signInFormDetails } = useSelector(selectSignInFormSelectors);

  const { email, password, otp } = signInFormDetails;

  return {
    signInFormDetails,
    email,
    password,
    otp,
  };
};

export default useGetSignInFormSelectors;
