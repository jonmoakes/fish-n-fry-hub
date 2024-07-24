import { useDispatch } from "react-redux";

import { updateSelectedItem } from "../../../store/choose-options/choose-options.slice";
import useChooseOptionsVariables from "./use-choose-options-variables";

const useChooseOptionsFunctions = () => {
  const {
    price,
    quantity,
    chosenSize,
    sizeOptionDoublePrice,
    sizeOptionTriplePrice,
    gratedCheeseChoice,
    gratedCheesePrice,
    donerMeatChoice,
    donerMeatPrice,
  } = useChooseOptionsVariables();
  const dispatch = useDispatch();

  const handleSizeChange = (event) => {
    const { value, name } = event.target;
    dispatch(updateSelectedItem({ [name]: value }));
  };

  const handleSingleChoiceCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (checked) {
      dispatch(updateSelectedItem({ [name]: "yes" }));
    } else {
      dispatch(updateSelectedItem({ [name]: "no" }));
    }
  };

  const chosenSizePrice = () => {
    switch (chosenSize) {
      case "single":
        return price;
      case "double":
        return price + sizeOptionDoublePrice;
      case "triple":
        return price + sizeOptionTriplePrice;
      default:
        return price;
    }
  };

  const chosenGratedCheesePrice = () => {
    switch (gratedCheeseChoice) {
      case "yes":
        return gratedCheesePrice;
      case "no":
        return 0;
      default:
        return 0;
    }
  };

  const chosenDonerMeatPrice = () => {
    switch (donerMeatChoice) {
      case "yes":
        return donerMeatPrice;
      case "no":
        return 0;
      default:
        return 0;
    }
  };

  const calculatePrice = () => {
    return (
      (chosenSizePrice() + chosenGratedCheesePrice() + chosenDonerMeatPrice()) *
      Number(quantity)
    );
  };

  return { handleSizeChange, handleSingleChoiceCheckboxChange, calculatePrice };
};

export default useChooseOptionsFunctions;
