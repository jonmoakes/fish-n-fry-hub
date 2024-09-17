import { useSelector } from "react-redux";
import { selectContactFormSelectors } from "../../store/contact-form/contact-form.slice";

const useGetContactFormSelectors = () => {
  const {
    contactFormIsLoading,
    contactFormDetails,
    responseStatus,
    contactFormError,
  } = useSelector(selectContactFormSelectors);

  const { name, email, message } = contactFormDetails;

  return {
    contactFormIsLoading,
    contactFormDetails,
    responseStatus,
    contactFormError,
    name,
    email,
    message,
  };
};

export default useGetContactFormSelectors;
