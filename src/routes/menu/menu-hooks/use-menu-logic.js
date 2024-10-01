import { useDispatch } from "react-redux";

import useGetMenuSelectors from "../../../hooks/selectors/use-get-menu-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetCartItemsSelectors from "../../../hooks/selectors/use-get-cart-items-selectors";
import { setMenuItemsForChosenCategory } from "../../../store/choose-options/choose-options.slice";

import { categories } from "../../../constants/constants";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useSetSearchField from "../../../hooks/use-set-search-field";
import { categoryItemsRoute } from "../../../strings/routes/routes-strings";

const useMenuLogic = () => {
  const { menuIsLoading, menuError, menuDocuments } = useGetMenuSelectors();
  const { currentUser } = useGetCurrentUserSelectors();
  const { cartItemsIsLoading, fetchCartItemsError } =
    useGetCartItemsSelectors();
  const { searchField, handleSearchFieldChange, resetSearchField } =
    useSetSearchField();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const navigateToCategory = (category) => {
    const filteredMenuDocuments = menuDocuments.filter(
      (doc) => doc.category === category
    );

    dispatch(setMenuItemsForChosenCategory(filteredMenuDocuments));
    setTimeout(() => {
      hamburgerHandlerNavigate(categoryItemsRoute);
    }, 100);
  };

  const itemsReturnedFromSearch = menuDocuments.filter((doc) =>
    doc.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const cartItemsHaveBeenFetched = localStorage.getItem(
    "cartItemsHaveBeenFetched"
  );

  const hasMenuError = menuError ? true : false;

  const noCurrentUserOrCartItemsFetchedOrCartFetchError =
    !currentUser || cartItemsHaveBeenFetched === "true" || fetchCartItemsError
      ? true
      : false;

  const sortedCategories = categories.sort();

  return {
    menuIsLoading,
    menuError,
    searchField,
    handleSearchFieldChange,
    resetSearchField,
    navigateToCategory,
    itemsReturnedFromSearch,
    sortedCategories,
    menuDocuments,
    hasMenuError,
    noCurrentUserOrCartItemsFetchedOrCartFetchError,
    cartItemsIsLoading,
  };
};

export default useMenuLogic;
