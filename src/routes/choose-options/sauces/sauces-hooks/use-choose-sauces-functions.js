import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateSelectedItem } from "../../../../store/choose-options/choose-options.slice";

import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";

import { saucesList } from "../sauces-list";

const useChooseSaucesFunctions = () => {
  const {
    selectedItem,
    saucesChosen,
    numberOfSaucesAvailable,
    hasSaucesOption,
  } = useChooseOptionsVariables();
  const [noSauceChecked, setNoSauceChecked] = useState(false);

  const dispatch = useDispatch();

  const handleSaucesChange = (event) => {
    const { name, checked } = event.target;

    if (name === "noSauce") {
      setNoSauceChecked(checked);

      // If noSauce is checked, reset all other checkboxes to false
      if (checked) {
        const updatedSauces = { noSauce: true };
        saucesList.forEach((checkbox) => {
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

  const saucesToRender = noSauceChecked
    ? saucesList.filter((checkbox) => checkbox.name === "noSauce")
    : numberOfSaucesAvailable === 1
    ? saucesList.filter((checkbox) => checkbox.name !== "noSauce")
    : saucesList;

  const numberOfCheckboxesChosen = () => {
    if (!saucesChosen) return 0;

    return Object.values(saucesChosen).filter((item) => item === true).length;
  };

  // converts eg garlicMayo to garlic mayo
  const formatSauceName = (sauceName) => {
    return sauceName.replace(
      /([a-z])([A-Z])/g,
      (match, p1, p2) => `${p1} ${p2.toLowerCase()}`
    );
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
    formatSauceName,
    showSauceCheckboxes,
    showSauceRadio,
  };
};

export default useChooseSaucesFunctions;
