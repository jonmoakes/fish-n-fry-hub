import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import SearchBar from "../searchbar/searchbar.component";

const ItemSearch = ({
  searchField,
  handleSearchFieldChange,
  resetSearchField,
}) => {
  return (
    <ParentDiv>
      {!searchField.length ? (
        <Text>search for products by typing in a query below:</Text>
      ) : (
        <Text>tap the red 'x' button to clear the search field</Text>
      )}
      <SearchBar
        {...{ handleSearchFieldChange, resetSearchField, searchField }}
      />
    </ParentDiv>
  );
};

export default ItemSearch;
