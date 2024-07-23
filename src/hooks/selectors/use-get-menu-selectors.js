import { useSelector } from "react-redux";

import { selectMenuSelectors } from "../../store/menu/menu.slice";

const useGetMenuSelectors = () => {
  const { menuIsLoading, menuDocuments, menuError } =
    useSelector(selectMenuSelectors);

  return {
    menuIsLoading,
    menuDocuments,
    menuError,
  };
};

export default useGetMenuSelectors;
