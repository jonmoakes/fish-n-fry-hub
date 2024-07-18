import { useSelector } from "react-redux";

import { selectMenuSelectors } from "../../store/menu/menu.slice";

const useGetMenuSelectors = () => {
  const { menuIsLoading, menuDocuments, menuError, chosenCategory } =
    useSelector(selectMenuSelectors);

  const menuDocumentsFromChosenCategory = chosenCategory
    ? menuDocuments.filter((doc) => doc.category === chosenCategory)
    : null;

  return {
    menuIsLoading,
    menuDocuments,
    menuError,
    chosenCategory,
    menuDocumentsFromChosenCategory,
  };
};

export default useGetMenuSelectors;
