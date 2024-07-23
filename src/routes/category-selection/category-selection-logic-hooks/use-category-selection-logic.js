import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import useGetMenuSelectors from "../../../hooks/selectors/use-get-menu-selectors";
import { setChosenCategory } from "../../../store/menu/menu.slice";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useSetSearchField from "../../../hooks/use-set-search-field";

const useCategorySelectionLogic = () => {
  const { menuError, menuDocuments } = useGetMenuSelectors();
  const { searchField, handleSearchFieldChange, resetSearchField } =
    useSetSearchField();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  const navigateToCategory = (category) => {
    dispatch(setChosenCategory(category));
    setTimeout(() => {
      hamburgerHandlerNavigate(`${path}/${category}`);
    }, 100);
  };

  const itemsReturnedFromSearch = menuDocuments.filter((doc) =>
    doc.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return {
    menuError,
    menuDocuments,
    searchField,
    handleSearchFieldChange,
    resetSearchField,
    navigateToCategory,
    itemsReturnedFromSearch,
  };
};

export default useCategorySelectionLogic;
