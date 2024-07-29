import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateSelectedItem } from "../../../store/choose-options/choose-options.slice";

import useChooseOptionsVariables from "./use-choose-options-variables";

import { saucesCheckboxes } from "../multiple-sauces/sauces-checkboxes";

const useChooseSaucesFunctions = () => {
  const { selectedItem, saucesChosen } = useChooseOptionsVariables();
  const [noSauceChecked, setNoSauceChecked] = useState(false);

  const dispatch = useDispatch();

  const handleSaucesChange = (event) => {
    const { name, checked } = event.target;

    if (name === "noSauce") {
      setNoSauceChecked(checked);

      // If noSauce is checked, reset all other checkboxes to false
      if (checked) {
        const updatedSauces = { noSauce: true };
        saucesCheckboxes.forEach((checkbox) => {
          if (checkbox.name !== "noSauce") {
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

  const saucesCheckboxesToRender = noSauceChecked
    ? saucesCheckboxes.filter((checkbox) => checkbox.name === "noSauce")
    : saucesCheckboxes;

  const numberOfCheckboxesChosen = () => {
    if (!saucesChosen) return 0;

    return Object.values(saucesChosen).filter((item) => item === true).length;
  };

  return {
    handleSaucesChange,
    saucesCheckboxesToRender,
    numberOfCheckboxesChosen,
    noSauceChecked,
  };
};

export default useChooseSaucesFunctions;
