import { useDispatch } from "react-redux";

import { updateSelectedItem } from "../../../store/choose-options/choose-options.slice";
import useChooseOptionsVariables from "./use-choose-options-variables";

const useChooseOptionsFunctions = () => {
  const {
    gratedCheesePriceError,
    donerMeatPriceError,
    saucesDocumentsError,
    condimentsDocumentsError,
    meatsDocumentsError,
    piesDocumentsError,
    canDocumentsError,
  } = useChooseOptionsVariables();
  const dispatch = useDispatch();

  const handleOptionChange = (event) => {
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

  const hasFetchOptionsError = () => {
    return gratedCheesePriceError ||
      donerMeatPriceError ||
      saucesDocumentsError ||
      condimentsDocumentsError ||
      meatsDocumentsError ||
      piesDocumentsError ||
      canDocumentsError
      ? true
      : false;
  };

  return {
    handleOptionChange,
    handleSingleChoiceCheckboxChange,
    hasFetchOptionsError,
  };
};

export default useChooseOptionsFunctions;
