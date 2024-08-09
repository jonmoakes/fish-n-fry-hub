import { useDispatch } from "react-redux";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { resetCartState } from "../../../store/cart/cart.slice";
import { menuRoute } from "../../../strings/routes/routes-strings";

const useSendEmailConfirmation = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const sendEmailConfirmation = (name, email) => {
    //send email here
    console.log(`email sent to ${name} at ${email}`);
    dispatch(resetCartState());
    hamburgerHandlerNavigate(menuRoute);
  };

  return { sendEmailConfirmation };
};

export default useSendEmailConfirmation;
