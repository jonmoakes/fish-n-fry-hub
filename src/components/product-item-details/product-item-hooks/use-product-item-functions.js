import { useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { setSelectedItem } from "../../../store/choose-options/choose-options.slice";

import { chooseOptionsRoute } from "../../../strings/routes/routes-strings";

const useProductItemFunctions = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const chooseAndNavigate = (name, price) => {
    // localStorage.setItem("chosenItemName", name);
    // localStorage.setItem("chosenItemPrice", price);

    dispatch(setSelectedItem({ name, price }));
    setTimeout(() => {
      hamburgerHandlerNavigate(chooseOptionsRoute);
    }, 100);
  };

  return { chooseAndNavigate };
};

export default useProductItemFunctions;
