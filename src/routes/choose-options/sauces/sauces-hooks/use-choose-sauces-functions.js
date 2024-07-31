import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateSelectedItem } from "../../../../store/choose-options/choose-options.slice";

import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";

const useChooseSaucesFunctions = () => {
  const {
    selectedItem,
    saucesChosen,
    numberOfSaucesAvailable,
    hasSaucesOption,
    saucesDocuments,
  } = useChooseOptionsVariables();
  const [noSauceChecked, setNoSauceChecked] = useState(false);

  const dispatch = useDispatch();

  const handleSaucesChange = (event) => {
    const { name, checked } = event.target;

    if (name === "no sauce") {
      setNoSauceChecked(checked);

      // If 'no sauce' is checked, reset all other checkboxes to false
      if (checked) {
        const updatedSauces = { "no sauce": true };
        saucesDocuments.forEach((checkbox) => {
          if (checkbox.name !== "no sauce") {
            updatedSauces[checkbox.name] = false;
          }
        });
        dispatch(updateSelectedItem({ saucesChosen: updatedSauces }));
        return;
      }
    }

    const sauceChecked = event.target.checked;
    const updatedSauces = {
      ...selectedItem.saucesChosen,
      [name]: sauceChecked,
    };
    dispatch(updateSelectedItem({ saucesChosen: updatedSauces }));
  };

  const saucesToRender = !saucesDocuments
    ? []
    : noSauceChecked
    ? saucesDocuments.filter((checkbox) => checkbox.name === "no sauce")
    : numberOfSaucesAvailable === 1
    ? saucesDocuments.filter((checkbox) => checkbox.name !== "no sauce")
    : saucesDocuments;

  const numberOfCheckboxesChosen = () => {
    if (!saucesChosen) return 0;

    return Object.values(saucesChosen).filter((item) => item === true).length;
  };

  const showSauceCheckboxes =
    hasSaucesOption && numberOfSaucesAvailable !== 1 ? true : false;
  const showSauceRadio =
    hasSaucesOption && numberOfSaucesAvailable === 1 ? true : false;

  return {
    handleSaucesChange,
    saucesToRender,
    numberOfCheckboxesChosen,
    noSauceChecked,
    showSauceCheckboxes,
    showSauceRadio,
  };
};

export default useChooseSaucesFunctions;
