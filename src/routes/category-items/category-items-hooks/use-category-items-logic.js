import useGetChooseOptionsSelectors from "../../../hooks/selectors/use-get-choose-options-selectors";
import useSetSearchField from "../../../hooks/use-set-search-field";

const useCategoryItemsLogic = () => {
  const { categoryItems, sortedCategoryItems } = useGetChooseOptionsSelectors();
  const { searchField, resetSearchField, handleSearchFieldChange } =
    useSetSearchField();

  const itemsReturnedFromSearch = categoryItems.filter((doc) =>
    doc.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const chosenCategory =
    categoryItems && categoryItems.length
      ? categoryItems[0].category
      : "products";

  const categoryItemsFound = categoryItems && categoryItems.length && true;

  return {
    chosenCategory,
    searchField,
    resetSearchField,
    handleSearchFieldChange,
    itemsReturnedFromSearch,
    sortedCategoryItems,
    categoryItemsFound,
  };
};

export default useCategoryItemsLogic;
