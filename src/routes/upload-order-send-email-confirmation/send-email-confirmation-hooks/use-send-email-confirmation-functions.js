import { useDispatch } from "react-redux";
import useFireSwal from "../../../hooks/use-fire-swal";
import { sendEmailOrderConfirmationAsync } from "../../../store/send-email/send-email.thunks";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import { uploadOrderDeleteCartItemsRoute } from "../../../strings/routes/routes-strings";

const useSendEmailConfirmationFunctions = () => {
  const { email, name } = useGetCurrentUserSelectors();
  const { formattedStringOfOrderForEmail } =
    useGetDatabaseManagementSelectors();

  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const sendEmail = () => {
    dispatch(
      sendEmailOrderConfirmationAsync({
        email,
        name,
        formattedStringOfOrderForEmail,
      })
    ).then((resultAction) => {
      if (sendEmailOrderConfirmationAsync.fulfilled.match(resultAction)) {
        fireSwal("success", "email sent!", "", 0, "", false, "", false).then(
          (isConfirmed) => {
            if (isConfirmed) {
              hamburgerHandlerNavigate(uploadOrderDeleteCartItemsRoute);
            }
          }
        );
      }
    });
  };

  const dontSendEmail = () => {
    hamburgerHandlerNavigate(uploadOrderDeleteCartItemsRoute);
  };

  return { sendEmail, dontSendEmail };
};

export default useSendEmailConfirmationFunctions;
