import { useDispatch } from "react-redux";

import { updateSelectedItem } from "../../../../store/choose-options/choose-options.slice";

import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";

const useChooseCondimentsFunctions = () => {
  const {
    selectedItem,
    condimentsChosen,
    numberOfCondimentsAvailable,
    hasCondimentsOption,
  } = useChooseOptionsVariables();

  const dispatch = useDispatch();

  const handleCondimentsChange = (event) => {
    const { name, checked } = event.target;

    const updatedCondiments = {
      ...selectedItem.condimentsChosen,
      [name]: checked,
    };
    dispatch(updateSelectedItem({ condimentsChosen: updatedCondiments }));
  };

  const numberOfCondimentsCheckboxesChosen = () => {
    if (!condimentsChosen) return 0;

    return Object.values(condimentsChosen).filter((item) => item === true)
      .length;
  };

  const showCondimentsCheckboxes =
    hasCondimentsOption && numberOfCondimentsAvailable !== 1 ? true : false;
  const showCondimentsRadio =
    hasCondimentsOption && numberOfCondimentsAvailable === 1 ? true : false;

  return {
    numberOfCondimentsCheckboxesChosen,
    showCondimentsCheckboxes,
    showCondimentsRadio,
    handleCondimentsChange,
  };
};

export default useChooseCondimentsFunctions;
