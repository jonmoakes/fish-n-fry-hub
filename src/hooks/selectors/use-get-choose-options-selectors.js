import { useSelector } from "react-redux";
import { selectChooseOptionsSelectors } from "../../store/choose-options/choose-options.slice";

const useGetChooseOptionsSelectors = () => {
  const { selectedItem } = useSelector(selectChooseOptionsSelectors);

  const { name, price } = selectedItem ?? {};

  return {
    selectedItem,
    name,
    price,
  };
};

export default useGetChooseOptionsSelectors;
