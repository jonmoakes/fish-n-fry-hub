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

  //menu
  const menuHasBeenFetched = localStorage.getItem("menuHasBeenFetched");
  const cartItemsHaveBeenFetched = localStorage.getItem(
    "cartItemsHaveBeenFetched"
  );

  const hasMenuErrorOrMenuHasBeenFetched =
    menuError || menuHasBeenFetched === "true" ? true : false;

  // this will occur the first time a non logged in user visits the menu page.
  const noUserAndNoMenuDocs =
    !currentUser && !menuDocuments.length ? true : false;

  // this will occure after the user signs out as we don't clear the menu state as no users also need it
  const noUserAndHasMenuDocs =
    !currentUser && menuDocuments && menuDocuments.length ? true : false;

  // this will occur if user signs in or up without having visited the menu page first.
  const isCurrentUserAndMenuHasNotBeenFetched =
    currentUser && menuHasBeenFetched !== "true" ? true : false;

  //cart
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
    hasMenuErrorOrMenuHasBeenFetched,
    noUserAndNoMenuDocs,
    isCurrentUserAndMenuHasNotBeenFetched,
    noCurrentUserOrCartItemsFetchedOrCartFetchError,
    cartItemsIsLoading,
    noUserAndHasMenuDocs,
  };
};

export default useMenuLogic;
