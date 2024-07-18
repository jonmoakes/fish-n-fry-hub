import Balancer from "react-wrap-balancer";
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
        <Text>
          <Balancer>search for products by typing in a query below:</Balancer>
        </Text>
      ) : (
        <Text>
          <Balancer>tap the red 'x' button to clear the search field</Balancer>
        </Text>
      )}
      <SearchBar
        {...{ handleSearchFieldChange, resetSearchField, searchField }}
      />
    </ParentDiv>
  );
};

export default ItemSearch;
