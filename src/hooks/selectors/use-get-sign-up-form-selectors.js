import { useSelector } from "react-redux";

import { selectSignUpFormSelectors } from "../../store/sign-up-form/sign-up-form.slice";

const useGetSignUpFormSelectors = () => {
  const { signUpFormDetails } = useSelector(selectSignUpFormSelectors);

  const { name, email, password, confirmPassword } = signUpFormDetails;

  return {
    signUpFormDetails,
    name,
    email,
    password,
    confirmPassword,
  };
};

export default useGetSignUpFormSelectors;
