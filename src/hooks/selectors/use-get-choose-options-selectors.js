import { useSelector } from "react-redux";
import { selectChooseOptionsSelectors } from "../../store/choose-options/choose-options.slice";

const useGetChooseOptionsSelectors = () => {
  const { categoryItems, selectedItem } = useSelector(
    selectChooseOptionsSelectors
  );

  const { name, price } = selectedItem ?? {};

  return { categoryItems, selectedItem, name, price };
};

export default useGetChooseOptionsSelectors;
