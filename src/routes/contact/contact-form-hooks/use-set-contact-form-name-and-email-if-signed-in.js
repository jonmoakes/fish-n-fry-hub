import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetContactFormSelectors from "../../../hooks/selectors/use-get-contact-form-selectors";
import { setContactFormDetails } from "../../../store/contact-form/contact-form.slice";

const useSetContactFormNameAndEmailIfSignedIn = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { name, email } = useGetContactFormSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || (name && email)) return;

    dispatch(
      setContactFormDetails({
        name: currentUser.name,
        email: currentUser.email,
      })
    );
  });
};

export default useSetContactFormNameAndEmailIfSignedIn;
