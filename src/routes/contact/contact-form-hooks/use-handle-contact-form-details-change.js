import { useDispatch } from "react-redux";

import useGetContactFormSelectors from "../../../hooks/selectors/use-get-contact-form-selectors";

import { setContactFormDetails } from "../../../store/contact-form/contact-form.slice";

const useHandleContactFormDetailsChange = () => {
  const { contactFormDetails } = useGetContactFormSelectors();
  const dispatch = useDispatch();

  const handleContactFormDetailsChange = (event) => {
    const { value, name } = event.target;
    dispatch(setContactFormDetails({ ...contactFormDetails, [name]: value }));
  };

  return { handleContactFormDetailsChange };
};

export default useHandleContactFormDetailsChange;
