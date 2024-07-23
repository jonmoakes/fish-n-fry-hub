import useGetMenuSelectors from "../../../hooks/selectors/use-get-menu-selectors";
import useSetSearchField from "../../../hooks/use-set-search-field";

const useChosenCategoryLogic = () => {
  const { chosenCategory, menuDocumentsFromChosenCategory } =
    useGetMenuSelectors();
  const { searchField, resetSearchField, handleSearchFieldChange } =
    useSetSearchField();

  const itemsReturnedFromSearch = menuDocumentsFromChosenCategory.filter(
    (doc) => doc.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return {
    chosenCategory,
    searchField,
    resetSearchField,
    handleSearchFieldChange,
    itemsReturnedFromSearch,
    menuDocumentsFromChosenCategory,
  };
};

export default useChosenCategoryLogic;
