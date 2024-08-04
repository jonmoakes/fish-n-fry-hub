import { useDispatch } from "react-redux";

import { updateSelectedItem } from "../../../store/choose-options/choose-options.slice";

const useChooseOptionsFunctions = () => {
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

  return {
    handleOptionChange,
    handleSingleChoiceCheckboxChange,
  };
};

export default useChooseOptionsFunctions;
