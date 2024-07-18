import SearchBar from "../../components/searchbar/searchbar.component";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const CategorySearch = ({
  searchField,
  chosenCategory,
  handleSearchFieldChange,
  resetSearchField,
}) => {
  return (
    <ParentDiv>
      {!searchField.length ? (
        <Text>
          search the {chosenCategory} category by typing in a query below:
        </Text>
      ) : (
        <Text>tap the red 'x' button to clear the search field</Text>
      )}
      <SearchBar
        {...{ handleSearchFieldChange, resetSearchField, searchField }}
      />
    </ParentDiv>
  );
};

export default CategorySearch;
