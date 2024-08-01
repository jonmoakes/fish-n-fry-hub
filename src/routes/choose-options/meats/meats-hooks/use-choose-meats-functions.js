import { useDispatch } from "react-redux";

import { updateSelectedItem } from "../../../../store/choose-options/choose-options.slice";

import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";

const useChooseMeatsFunctions = () => {
  const { selectedItem, meatsChosen, numberOfMeatsAvailable, hasMeatsOption } =
    useChooseOptionsVariables();

  const dispatch = useDispatch();

  const handleMeatsChange = (event) => {
    const { name, checked } = event.target;

    const updatedMeats = {
      ...selectedItem.meatsChosen,
      [name]: checked,
    };
    dispatch(updateSelectedItem({ meatsChosen: updatedMeats }));
  };

  const numberOfMeatsCheckboxesChosen = () => {
    if (!meatsChosen) return 0;

    return Object.values(meatsChosen).filter((item) => item === true).length;
  };

  const showMeatsCheckboxes =
    hasMeatsOption && numberOfMeatsAvailable !== 1 ? true : false;
  const showMeatsRadio =
    hasMeatsOption && numberOfMeatsAvailable === 1 ? true : false;

  return {
    handleMeatsChange,
    numberOfMeatsCheckboxesChosen,
    showMeatsCheckboxes,
    showMeatsRadio,
  };
};

export default useChooseMeatsFunctions;
