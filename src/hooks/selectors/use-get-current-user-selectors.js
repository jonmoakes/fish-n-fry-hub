import { useSelector } from "react-redux";
import { selectCurrentUserSelectors } from "../../store/user/user.slice";

const useGetCurrentUserSelectors = () => {
  const {
    currentUser,
    currentUserIsLoading,
    currentUserError,
    emailOtpUserId,
  } = useSelector(selectCurrentUserSelectors);

  const { email, id, name, phoneNumber, provider } = currentUser ?? {};

  return {
    currentUser,
    currentUserIsLoading,
    currentUserError,
    id,
    name,
    email,
    phoneNumber,
    provider,
    emailOtpUserId,
  };
};

export default useGetCurrentUserSelectors;
