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
  const dispatch = useDispatch();

  const navigateToCategory = (category) => {
    dispatch(setChosenCategory(category));
    setTimeout(() => {
      hamburgerHandlerNavigate(`${location.pathname}/${category}`);
    }, 100);
  };

  const menuItemsExist = menuDocuments && menuDocuments.length && true;

  const itemsReturnedFromSearch = menuItemsExist
    ? menuDocuments.filter((doc) =>
        doc.name.toLowerCase().includes(searchField.toLowerCase())
      )
    : null;

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
