import useGetMenuSelectors from "../../../hooks/selectors/use-get-menu-selectors";
import useSetSearchField from "../../../hooks/use-set-search-field";

const useChosenCategoryLogic = () => {
  const { chosenCategory, menuDocumentsFromChosenCategory } =
    useGetMenuSelectors();
  const { searchField, resetSearchField, handleSearchFieldChange } =
    useSetSearchField();

  const menuItemsDoNotExist = !menuDocumentsFromChosenCategory && true;

  const menuItemsExist =
    menuDocumentsFromChosenCategory &&
    menuDocumentsFromChosenCategory.length &&
    true;

  const itemsReturnedFromSearch = menuItemsExist
    ? menuDocumentsFromChosenCategory.filter((doc) =>
        doc.name.toLowerCase().includes(searchField.toLowerCase())
      )
    : null;

  return {
    chosenCategory,
    menuItemsDoNotExist,
    menuItemsExist,
    searchField,
    resetSearchField,
    handleSearchFieldChange,
    itemsReturnedFromSearch,
    menuDocumentsFromChosenCategory,
  };
};

export default useChosenCategoryLogic;
