import { useDispatch } from "react-redux";

import { updateSelectedItem } from "../../../../store/choose-options/choose-options.slice";

import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";

const useChooseKebabFunctions = () => {
  const { selectedItem, kebabChosen, hasKebabOption } =
    useChooseOptionsVariables();

  const dispatch = useDispatch();

  const handleKebabChange = (event) => {
    const { name, checked } = event.target;

    const updatedKebab = {
      ...selectedItem.kebabChosen,
      [name]: checked,
    };
    dispatch(updateSelectedItem({ kebabChosen: updatedKebab }));
  };

  // converts eg garlicMayo to garlic mayo
  const formatKebabName = (kebabName) => {
    return kebabName.replace(
      /([a-z])([A-Z])/g,
      (match, p1, p2) => `${p1} ${p2.toLowerCase()}`
    );
  };

  return {
    kebabChosen,
    hasKebabOption,
    handleKebabChange,
    formatKebabName,
  };
};

export default useChooseKebabFunctions;
